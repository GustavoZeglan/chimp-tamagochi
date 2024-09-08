import { Button } from "@/components/Button";
import PlayButton from "@/components/PlayButton";
import { View, Text, StyleSheet } from "react-native";
import { Href, useRouter } from "expo-router";


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

    const navigation = useRouter();
    

    const handleNavigate = (route: Href) => {
        navigation.push(route);
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Macaqueie comigo</Text>
            <PlayButton onPress={() => handleNavigate("/rockPaperScissorGame")} title="Pedra Papel Tesoura" />
            <PlayButton onPress={() => handleNavigate("/")} title="Pega Banana" />
            <Button onPress={() => handleNavigate("/")} text="Voltar" isPrimary={false}/>
        </View>
    );
}