import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "@/components/Header";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import {Monkeys} from "@/mock/monkeys";
import {AntDesign} from "@expo/vector-icons";
import {useState} from "react";
import {Monkey} from "@/models/Monkey";
import {any} from "prop-types";



const adoptScreen = () => {
    return (
        <SafeAreaView style={styles.screenStyle}>
            <Header title={"Adotar novo Macaco"}></Header>
            <View style={styles.skinContainer}>
                <Text style={styles.skinText}>Selecione a Aparência</Text>
                <View style={styles.skinSelectionContainer}>
                    <FlatList horizontal={true} data={Monkeys} renderItem={({item}) => (
                        <TouchableOpacity>
                            <MonkeyDisplay monkey={item}></MonkeyDisplay>
                        </TouchableOpacity>
                    )}>
                    </FlatList>

                </View>
            </View>
            <View style={styles.adoptContainer}>
                <TextInput style={styles.inputName}
                           placeholder={"Insira o nome do macaquinho"}
                           placeholderTextColor={"white"}></TextInput>
                <TouchableOpacity style={styles.adoptButton}>
                    <Text style={styles.adoptText}>Adotar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        backgroundColor: "#262b44",
    },
    skinContainer: {
        margin: 32,
        display: "flex",
        alignItems: "center",
        gap: 8
    },
    skinSelectionContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    skinText: {
        color: "white",
        fontFamily: "PressStart2P",
        fontSize: 20,
        textAlign: "center"
    },
    adoptContainer: {
        display: "flex",
        gap: 8
        ,
        alignItems: "center"
    },
    inputName: {
        backgroundColor: "#7f8ea7",
        padding: 8,
        borderRadius: 6,
        width: "80%"
    },
    adoptButton: {
        backgroundColor : "#cfa740",
        width: "80%",
        padding: 8,
        borderRadius: 6
    },
    adoptText: {
        color: "white",
        fontFamily: "PressStart2P",
        fontSize: 12,
        textAlign: "center"
    },
    skins: {
        backgroundColor: "blue"
    }

})
export default adoptScreen;