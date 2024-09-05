import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "@/components/Header";
import StatusCard from "@/components/StatusCard/StatusCard";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import { Monkeys } from "@/mock/monkeys";

const monkeyDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Sala de Cuidados"}></Header>
            <View style={styles.statusCardContainer}>
                <StatusCard status={"Fome"} image={require("../assets/images/food.png")} value={54}></StatusCard>
                <StatusCard status={"Sono"} image={require("../assets/images/Bed.png")} value={54}></StatusCard>
                <StatusCard status={"Emoção"} image={require("../assets/images/Smiling.png")} value={54}></StatusCard>
            </View>
            <View style={styles.monkeyInfoContainer}>
                <Text style={styles.textStatus}>Feliz</Text>
                <MonkeyDisplay monkey={Monkeys[2]}></MonkeyDisplay>
                <Text style={styles.monkeyName}>Sheila</Text>
            </View>
            <View style={styles.interactionContainer}>

                <TouchableOpacity style={styles.interaction} onPress={()=>console.log("teste123")}>
                    <Image source={require("../assets/images/foods/beer.png")}></Image>
                    <Text style={styles.interactionText}>Comer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.interaction}  onPress={()=>console.log("teste456")}>
                    <Image source={require("../assets/images/sleep.png")}></Image>
                    <Text style={styles.interactionText}>Dormir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.interaction} onPress={()=>console.log("teste789")}>
                    <Image source={require("../assets/images/controller.png")}></Image>
                    <Text style={styles.interactionText}>Brincar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#262b44",
        fontFamily: "PressStart2P"
    },
    statusCardContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 16,
        justifyContent: "center",
        margin: 32
    },
    monkeyInfoContainer: {
        display: "flex",
        alignItems: "center"
    },
    textStatus: {
        fontFamily: "PressStart2P",
        color: "white",
        fontSize: 18,
    },
    monkeyName: {
        fontFamily: "PressStart2P",
        color: "white",
        fontSize: 18,
    },
    interactionContainer: {
        width: "100%",
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        padding: 16,
        backgroundColor: "#3f2832",
    },
    interaction:{
        display:"flex",
        alignItems: "center",
        gap:8
    },
    interactionText:{
        color: "white",
        fontFamily: "PressStart2P",
        fontSize: 10
    }

});

export default monkeyDetails;