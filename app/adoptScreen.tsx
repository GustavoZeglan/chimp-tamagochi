import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "@/components/Header";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import {Monkeys} from "@/mock/monkeys";
import { Button } from "@/components/Button";

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
                <Button isPrimary={true} text="Adotar" href={"/monkeyDetails"}/>
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
        fontSize: 20,
        textAlign: "center",
        fontFamily: "PressStart2P"
    },
    adoptContainer: {
        display: "flex",
        gap: 8,
        paddingHorizontal: 16,
        alignItems: "center"
    },
    inputName: {
        backgroundColor: "#7f8ea7",
        width: "100%",
        paddingVertical: 16,
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        fontFamily: "PressStart2P",
        fontSize: 11,
        paddingLeft: 16,
        paddingTop: 24,
    },
    adoptText: {
        color: "white",
        fontSize: 12,
        textAlign: "center",
        fontFamily: "PressStart2P"
    },
    skins: {
        backgroundColor: "blue"
    },

})
export default adoptScreen;