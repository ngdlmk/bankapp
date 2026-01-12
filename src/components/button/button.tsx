import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button-styles";

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'outline';
}

export const ShawbrookButton: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary' }) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer(variant)}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={styles.btnText(variant)}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};