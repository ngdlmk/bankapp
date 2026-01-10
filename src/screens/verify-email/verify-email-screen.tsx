import { VerifyEmailScreenNavigationProps } from '@/types/navigation-types';
import React from 'react';
import { Text, View } from 'react-native';

const VerifyEmailScreen = ({ navigation, route }: VerifyEmailScreenNavigationProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Verify Email Screen</Text>
            {route.params?.email ? <Text>{route.params.email}</Text> : null}
        </View>
    );
};

export default VerifyEmailScreen;