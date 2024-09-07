import {Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "@/components/Header";
import StatusCard from "@/components/StatusCard/StatusCard";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import { Monkeys } from "@/mock/monkeys";
import { useGlobalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import useChimpDatabase from "@/database/chimpService";
import { Monkey } from "@/models/Monkey";
import { Foods } from "@/mock/foods";

const monkeyDetails = () => {

    const { id } = useGlobalSearchParams();
    const { getChimpById, updateHungry } = useChimpDatabase();
    const [monkey, setMonkey] = useState<Monkey>();
    const [food, setFood] = useState<number>(1);

    const getChimp = useCallback(async (id: number) => {
        try {

            const res = await getChimpById(id);  
            if (res) {
                setMonkey(res);
            }

        } catch(e) {
            console.error(e);
        }
    },[monkey]);

    const handleHungry = async (id:number) => {
        try {

            if (monkey?.hungry && monkey.hungry == 100) {
                return;
            } 
            
            if (monkey?.hungry && monkey.hungry + 10 >= 100) {
                await updateHungry(id, 100);  
                handleFood();
                getChimp(id);
                return;
            }

            await updateHungry(id, monkey!.hungry + 10);
            handleFood();  
            getChimp(id);

        } catch(e) {
            console.error(e);
        }
    };

    const handleFood = () => {
        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * (Foods.length + 1));
            console.log(newNumber);
        } while (newNumber === food);
        setFood(newNumber);
    }

    useEffect(() => {
        getChimp(Number(id));
    }, [id, food]);


    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Sala de Cuidados"}></Header>
            <View style={styles.statusCardContainer}>
                <StatusCard status={"Fome"} image={require("../assets/images/food.png")} value={monkey?.hungry ?? 0}></StatusCard>
                <StatusCard status={"Sono"} image={require("../assets/images/Bed.png")} value={monkey?.sleep ?? 0}></StatusCard>
                <StatusCard status={"Emoção"} image={require("../assets/images/Smiling.png")} value={monkey?.fun ?? 0}></StatusCard>
            </View>
            <View style={styles.monkeyInfoContainer}>
                <Text style={styles.textStatus}>Feliz</Text>
                <MonkeyDisplay image={Monkeys[monkey?.skin ?? 0].idle}></MonkeyDisplay>
                <Text style={styles.monkeyName}>{monkey?.name}</Text>
            </View>
            <View style={styles.interactionContainer}>

                <TouchableOpacity style={styles.interaction} onPress={() => handleHungry(Number(id))}>
                    <Image source={Foods[food]}></Image>
                    <Text style={styles.interactionText}>Comer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.interaction}  onPress={() => console.log("Bah...")}>
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