import React, { useCallback } from "react";
import {
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

type IntroScreenProps = {
/**
 * Called when the user presses the primary action (e.g. "Get Started").
 * If you're using React Navigation you can pass navigation.replace / navigate here.
 */
onContinue?: () => void;
};

const IntroScreen: React.FC<IntroScreenProps> = ({ onContinue }) => {
const handleContinue = useCallback(() => {
    if (onContinue) {
        onContinue();
    } else {
        // fallback when no handler provided
        // keep minimal and unobtrusive
        // Replace with navigation logic when integrating
        // e.g. navigation.replace("Home")
        // eslint-disable-next-line no-console
        console.log("Intro continue pressed");
    }
}, [onContinue]);

return (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar
            barStyle={Platform.select({ ios: "dark-content", android: "dark-content" })}
            backgroundColor="transparent"
            translucent
        />
        <View style={styles.container}>
            <View style={styles.hero}>
                <View style={styles.logoPlaceholder} accessibilityLabel="Intro illustration" />
                <Text style={styles.title}>Welcome to TravelSim</Text>
                <Text style={styles.subtitle}>
                    Explore destinations, plan trips, and simulate travel experiences — all in one place.
                </Text>
            </View>

            <View style={styles.actions}>
                <Pressable
                    style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
                    onPress={handleContinue}
                    accessibilityRole="button"
                    accessibilityLabel="Get started"
                    testID="intro-get-started"
                >
                    <Text style={styles.primaryButtonText}>Get Started</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.ghostButton, pressed && styles.buttonPressed]}
                    onPress={() => {
                        // Example of a secondary action; replace as needed
                        // eslint-disable-next-line no-console
                        console.log("Skip intro");
                    }}
                    accessibilityRole="button"
                    accessibilityLabel="Skip intro"
                    testID="intro-skip"
                >
                    <Text style={styles.ghostButtonText}>Skip</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
},
container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
},
hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    width: "100%",
},
logoPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E6F7FF",
    marginBottom: 24,
},
title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0B3D91",
    textAlign: "center",
    marginBottom: 8,
},
subtitle: {
    fontSize: 15,
    color: "#4B5563",
    textAlign: "center",
    paddingHorizontal: 12,
    lineHeight: 20,
},
actions: {
    width: "100%",
    paddingBottom: 32,
},
primaryButton: {
    backgroundColor: "#0B84FF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
},
primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
},
ghostButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
},
ghostButtonText: {
    color: "#0B84FF",
    fontSize: 15,
    fontWeight: "600",
},
buttonPressed: {
    opacity: 0.85,
},
});

export default IntroScreen;