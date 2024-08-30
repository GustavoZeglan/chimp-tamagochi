import { Button } from "@/components/Button";
import PlayButton from "@/components/PlayButton";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        paddingHorizontal: 16,
        gap: 16,
        backgroundColor: "#262B44",
    },
    Title: {
        fontFamily: "PressStart2P",
        fontSize: 28,
        color: "white",
        textAlign: "center",
    },
})

export default function GameCenter() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Macaqueie comigo</Text>
            <PlayButton href="/" title="Jogo da Memória" />
            <PlayButton href="/" title="Pega Banana" />
            <Button href={"/"} text="Voltar" isPrimary={false}/>
        </View>
    );
}