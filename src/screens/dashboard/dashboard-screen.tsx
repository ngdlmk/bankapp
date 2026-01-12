import { accounts, IAccount } from '@/constants/accounts';
import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountCard from './components/AccountCard';
import TransactionRow from './components/TransactionRow';
import { styles } from './dashboard-screen-styles';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(amount);
};

const DashboardScreen = () => {
    const [selectedAccount, setSelectedAccount] = useState<IAccount | null>(null);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={accounts as IAccount[]}
                    keyExtractor={(item) => item.account_id}
                    contentContainerStyle={styles.contentContainer}
                    ListHeaderComponent={
                        <View style={styles.headerContainer}>
                            <View style={styles.headerBar} />
                            <Text style={styles.pageTitle}>My Accounts</Text>
                            <Text style={styles.pageSubtitle}>Overview</Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <AccountCard
                            account={item}
                            onPress={() => setSelectedAccount(item)}
                        />
                    )}
                />
                <Modal
                    visible={!!selectedAccount}
                    animationType="slide"
                    presentationStyle='pageSheet'
                    onRequestClose={() => setSelectedAccount(null)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <View>
                                <Text style={styles.modalTitle}>
                                    {selectedAccount?.account_name}
                                </Text>
                                <Text style={styles.accountNumber}>
                                    Available Balance: {selectedAccount && formatCurrency(selectedAccount.balance)}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => setSelectedAccount(null)}>
                                <Text style={styles.closeButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={selectedAccount?.transactions}
                            keyExtractor={(item) => item.transaction_id}
                            contentContainerStyle={styles.transactionList}
                            renderItem={({ item }) => <TransactionRow item={item} />}
                        />
                    </View>
                </Modal>

            </SafeAreaView>
        </View>
    );
};

export default DashboardScreen;