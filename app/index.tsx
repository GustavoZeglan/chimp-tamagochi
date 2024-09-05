import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { MonkeyDisplay } from "@/components/MonkeyDisplay";
import { Monkeys } from "@/mock/monkeys";


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

    return (
        <>
            <Header title={"Adotar novo Macaco"}>

            </Header>

            <View style={styles.Container}>
                {/* <Button onPress={() => console.log("Novo Macaco")} text={"Novo Macaco"} isPrimary={true}/> */}
                {/* <Button onPress={() => console.log("Meus Macacos")} text={"Meus macacos"} isPrimary={false}/> */}
                <MonkeyDisplay monkey={Monkeys[3]}/>
            </View>
        </>
    )
}