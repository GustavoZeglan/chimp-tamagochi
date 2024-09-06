import { Text, TouchableOpacity } from "react-native";
import { ButtonStyles, TextStyles } from "./styles";

interface ButtonProps {
    text: string;
    isPrimary: boolean;
    onPress: () => void;
}

export const Button = ({text, isPrimary, onPress}: ButtonProps) => {
 
    return (
        <>
            <TouchableOpacity style={isPrimary ? ButtonStyles.primary : ButtonStyles.secondary} onPress={onPress}>
                <Text style={isPrimary ? TextStyles.primary : TextStyles.secondary}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}