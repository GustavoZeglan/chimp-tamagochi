import {StyleSheet, Text, View} from "react-native";

interface ButtonProps {
    text: string;
    onPress?: () => {};
    isPrimary?: boolean;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: "#CFA740",
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        color: "#fff",
        fontSize: 16,
    }
})

export const Button = ({text, onPress, isPrimary}: ButtonProps) => {
    return (
        <>
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
        </>
    )
}