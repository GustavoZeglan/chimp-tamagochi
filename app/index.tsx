import {StyleSheet, View} from "react-native";
import {Button} from "@/components/Button";
import React from "react";
import Header from "@/components/Header";


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
    return (
        <>
            <Header title={"Adotar novo Macaco"}>

            </Header>

            <View style={styles.container}>
                <Button onPress={() => console.log("Novo Macaco")} text={"Novo Macaco"} isPrimary={true}/>
                <Button onPress={() => console.log("Meus Macacos")} text={"Meus macacos"} isPrimary={false}/>
            </View>
        </>
    )
}