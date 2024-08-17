import { Text, Pressable} from "react-native";
import {ButtonStyles, TextStyles} from "./styles";

interface ButtonProps {
    text: string;
    onPress: () => void;
    isPrimary: boolean;
}

export const Button = ({text, onPress, isPrimary}: ButtonProps) => {
    return (
        <>
            <Pressable style={isPrimary ? ButtonStyles.primary : ButtonStyles.secondary} onPress={onPress}>
                    <Text style={isPrimary ? TextStyles.primary : TextStyles.secondary}>{text}</Text>
            </Pressable>
        </>
    )
}