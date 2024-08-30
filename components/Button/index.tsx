import { Text, Pressable, TouchableOpacity} from "react-native";
import {ButtonStyles, TextStyles} from "./styles";
import { Href, useRouter } from "expo-router";

interface ButtonProps {
    text: string;
    isPrimary: boolean;
    href: Href,
}

export const Button = ({text, isPrimary, href}: ButtonProps) => {
 
    const navigation = useRouter();

    const handlePress = () => {
        navigation.push(href);
    }

 
    return (
        <>
            <TouchableOpacity style={isPrimary ? ButtonStyles.primary : ButtonStyles.secondary} onPress={handlePress}>
                <Text style={isPrimary ? TextStyles.primary : TextStyles.secondary}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}