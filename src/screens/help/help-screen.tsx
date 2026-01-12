import { storage } from '@/utils/mmkv';
import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UnistylesRuntime } from 'react-native-unistyles';
import { styles } from './help-styles';

const STORAGE_KEY = 'chat_history';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

const OPENAI_API_KEY = 'sk-proj-xxx'; 

const HelpScreen = () => {
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [themeName, setThemeName] = useState(UnistylesRuntime.themeName);
    
    const flatListRef = useRef<FlatList>(null);

    const [messages, setMessages] = useState<Message[]>(() => {
        const savedMessages = storage.getString(STORAGE_KEY);
        if (savedMessages) {
            try { return JSON.parse(savedMessages); } catch (e) { }
        }
        return [{ id: '1', text: 'Hello! How can I help you with your banking today?', sender: 'ai' }];
    });

    useEffect(() => {
        storage.set(STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    const toggleTheme = () => {
        const nextTheme = UnistylesRuntime.themeName === 'light' ? 'dark' : 'light';
        UnistylesRuntime.setTheme(nextTheme);
        setThemeName(nextTheme);
    };

    const sendMessage = async () => {
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "You are a helpful banking assistant for Shawbrook Bank. Keep answers short and professional." },
                        ...messages.map(m => ({
                            role: m.sender === 'user' ? 'user' : 'assistant',
                            content: m.text
                        })),
                        { role: "user", content: inputText }
                    ]
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || 'Something went wrong');
            }

            const aiText = data.choices[0].message.content;
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: aiText,
                sender: 'ai'
            };
            setMessages(prev => [...prev, aiMsg]);

        } catch (error) {
            console.error('Fetch error:', error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, connection error.",
                sender: 'ai'
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setLoading(false);
        }
    };

    const clearChat = () => {
        Alert.alert("Clear Chat", "Delete all history?", [
            { text: "Cancel", style: "cancel" },
            { 
                text: "Delete", 
                style: "destructive", 
                onPress: () => {
                    storage.remove(STORAGE_KEY);
                    setMessages([{ id: '1', text: 'Hello! How can I help you with your banking today?', sender: 'ai' }]);
                }
            }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <View>
                    <Text style={styles.title}>AI Chat Support</Text>
                    <Text style={styles.subtitle}>Ask us anything</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <TouchableOpacity onPress={toggleTheme}>
                        <Text style={{ fontSize: 22 }}>
                            {themeName === 'light' ? '🌙' : '☀️'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={clearChat}>
                        <Text style={{ color: 'red', fontWeight: '600', fontSize: 14 }}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.chatContainer}
                renderItem={({ item }) => (
                    <View style={styles.messageBubble(item.sender === 'user')}>
                        <Text style={styles.messageText(item.sender === 'user')}>
                            {item.text}
                        </Text>
                    </View>
                )}
                onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
                onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
            />
            
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type a message..."
                        placeholderTextColor="#999"
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={sendMessage}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFF" />
                        ) : (
                            <Text style={styles.sendButtonText}>Send</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default HelpScreen;