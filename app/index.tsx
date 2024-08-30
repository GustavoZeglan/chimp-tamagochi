import {StyleSheet, View} from "react-native";
import {Button} from "@/components/Button";
import React from "react";
import Header from "@/components/Header";
import { MonkeyDisplay } from "@/components/MonkeyDisplay";
import { Monkey } from "@/models/Monkey";
import PlayButton from "@/components/PlayButton";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        gap: 16
    }
})



export default function StartPage() {

    const monkey = {
        name: "Cleitin",
        idleImg: "../../assets/images/macacopoolIdle.mp4"
    } as Monkey

    return (
        <>
            <Header title={"Adotar novo Macaco"}>

            </Header>

            <View style={styles.container}>
                <PlayButton title="Pega Banana" href="/game_center"/>
            </View>
        </>
    )
}