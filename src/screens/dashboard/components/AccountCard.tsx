import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { IAccount } from '@/constants/accounts';
import { styles } from '../dashboard-screen-styles';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(amount);
};

const maskAccountNumber = (num: string) => `•••• ${num.slice(-4)}`;

const AccountCard = ({ account, onPress }: { account: IAccount; onPress: () => void }) => (
    <TouchableOpacity
        style={styles.accountCard}
        onPress={onPress}
        activeOpacity={0.9}
    >
        <View style={styles.cardHeader}>
            <View>
                <Text style={styles.accountName}>{account.account_name}</Text>
                <Text style={styles.accountNumber}>
                    {account.sort_code} • {maskAccountNumber(account.account_number)}
                </Text>
            </View>
        </View>
        <Text style={styles.balance}>{formatCurrency(account.balance)}</Text>
    </TouchableOpacity>
);

export default AccountCard;