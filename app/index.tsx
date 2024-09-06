import {StyleSheet, View, Text, SafeAreaView, Image} from "react-native";
import {Button} from "@/components/Button";
import React from "react";
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
    },
    Paragraph: {
        color: "white",
        fontFamily: "PressStart2P",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 24,
    },
    ButtonsContainer: {
        display: "flex",
        gap: 16,
        flexDirection: "column",
        width: "100%"
    }
})



export default function StartPage() {

    const navigation = useRouter();
    

    const handleNavigate = (route: Href) => {
        navigation.push(route);
    }

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Title}>Macacogochi</Text>
            <Text style={styles.Paragraph}>Não se Esqueça de Cuidar dos Macaquinhos, eles precisam de você.</Text>
            <View style={styles.ButtonsContainer}>
                <Button text="Novo Macaco" isPrimary={true} onPress={() => handleNavigate("/adoptScreen")}/>
                <Button text="Meus Macacos" isPrimary={false} onPress={() => handleNavigate("/game_center")}/>
            </View>
            <Image source={require("../assets/images/banana.png")}/>
        </SafeAreaView>
    )
}