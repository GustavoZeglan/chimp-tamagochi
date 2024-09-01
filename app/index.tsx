import {StyleSheet, View, Text, SafeAreaView, Image} from "react-native";
import {Button} from "@/components/Button";
import React from "react";
import Header from "@/components/Header";
import { MonkeyDisplay } from "@/components/MonkeyDisplay";
import { Monkey } from "@/models/Monkey";
import PlayButton from "@/components/PlayButton";
import MonkeyDetails from "@/app/monkeyDetails";



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
        <MonkeyDetails></MonkeyDetails>
    )
}