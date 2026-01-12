import React from 'react';
import {
    Text,
    View
} from 'react-native';

import { ITransaction } from '@/constants/accounts';
import { styles } from '../dashboard-screen-styles';

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(amount);
};

const TransactionRow = ({ item }: { item: ITransaction }) => (
    <View style={styles.transactionRow}>
        <View>
            <Text style={styles.txDescription}>{item.description}</Text>
            <Text style={styles.txDate}>{item.date} • {item.category}</Text>
        </View>
        <Text style={styles.txAmount(item.type)}>
            {item.amount > 0 ? '+' : ''}{formatCurrency(item.amount)}
        </Text>
    </View>
);

export default TransactionRow;