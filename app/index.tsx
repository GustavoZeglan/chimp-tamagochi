import {StyleSheet, View} from "react-native";
import {Button} from "@/components/Button";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    }
})

export default function StartPage() {
    return (
        <>
            <View style={styles.container}>
                <Button text={"Meus macacos"}/>
            </View>
        </>
    )
}