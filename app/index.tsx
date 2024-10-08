import {StyleSheet, View, Text, SafeAreaView, Image} from "react-native";
import {Button} from "@/components/Button";
import React, { useCallback, useEffect } from "react";
import { Href, useRouter } from "expo-router";
import useChimpDatabase from "@/database/chimpService";

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

    const { decreaseAllStatus } = useChimpDatabase();

    const decreaseAll = useCallback(async () => {
        try {
            await decreaseAllStatus();
        } catch(e) {
            console.error(e);
        }
    },[]);

    const handleNavigate = (route: Href) => {
        navigation.push(route);
    }

    useEffect(() => {
        decreaseAll();
    },[]);

    return (
        <SafeAreaView style={styles.Container}>
            <Text style={styles.Title}>Macacogochi</Text>
            <Text style={styles.Paragraph}>Não se Esqueça de Cuidar dos Macaquinhos, eles precisam de você.</Text>
            <View style={styles.ButtonsContainer}>
                <Button text="Novo Macaco" isPrimary={true} onPress={() => handleNavigate("/adoptScreen")}/>
                <Button text="Meus Macacos" isPrimary={false} onPress={() => handleNavigate("/monkeyList")}/>
            </View>
            <Image source={require("../assets/images/banana.png")}/>
        </SafeAreaView>
    )
}