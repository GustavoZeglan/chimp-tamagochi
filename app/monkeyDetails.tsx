import {Image, ImageBackgroundProps, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "@/components/Header";
import StatusCard from "@/components/StatusCard/StatusCard";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import { Monkeys } from "@/mock/monkeys";
import {Href, useGlobalSearchParams, useRouter} from "expo-router";
import { useCallback, useEffect, useState } from "react";
import useChimpDatabase from "@/database/chimpService";
import { Monkey } from "@/models/Monkey";
import { Foods } from "@/mock/foods";
import { calcularStatusAtual } from "@/utils/calculateActualStatus";

const monkeyDetails = () => {

    const { id } = useGlobalSearchParams();
    const { getChimpById, updateHungry, updateSleep, updateFun } = useChimpDatabase();
    const [monkey, setMonkey] = useState<Monkey>();
    const [food, setFood] = useState<number>(0);
    const [image, setImage] = useState<ImageBackgroundProps>(Monkeys[monkey?.skin ?? 0].idle);
    const [isSleeping, setIsSleeping] = useState<boolean>(false);
    const [sleepStatus, setSleepStatus] = useState<number>(1);
    const [fun, setFun] = useState<number>(1);
    const [hungry, setHungry] = useState<number>(1);

    const router = useRouter();

    const handleNavigate = (route: Href) => {
        router.navigate(route);
    }


    const getChimp = useCallback(async (id: number) => {
        try {
            const res = await getChimpById(id);  
            if (res) {
                setMonkey(res);
                setImage(Monkeys[res.skin].idle);
                setSleepStatus(res.sleep);
                setHungry(res.hungry);
                setFun(res.fun);
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
                setIsSleeping(false);
                return;
            }

            setIsSleeping(false);
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
            newNumber = Math.floor(Math.random() * (Foods.length));
        } while (newNumber === food);
        setFood(newNumber);
    }

    const updateSleepInDB = useCallback(async (id: number, status: number) => {
        await updateSleep(id, status);
    }, []);

    const updateFunInDB = useCallback(async (id: number, status: number) => {
        await updateFun(id, status);
    },[]);

    const updateHungryInDB = useCallback(async (id: number, status: number) => {
        await updateHungry(id, status);
    },[]);

    useEffect(() => {
        getChimp(Number(id));
    }, [id]);

    useEffect(() => {

        if (!isSleeping) {
            if (calcularStatusAtual(hungry, sleepStatus, fun) == "Morto") {
                setImage(require("@/assets/images/tombstone.png"));
                return;
            }
    
            if (calcularStatusAtual(hungry, sleepStatus, fun) === "Crítico" || calcularStatusAtual(hungry, sleepStatus, fun) === "Muito Triste" || calcularStatusAtual(hungry, sleepStatus, fun) === "Triste") {
                setImage(Monkeys[monkey?.skin ?? 0].cry);
                return;
            } 
    
            if (calcularStatusAtual(hungry, sleepStatus, fun) === "Bem" || calcularStatusAtual(hungry, sleepStatus, fun) == "OK" || calcularStatusAtual(hungry, sleepStatus, fun) === "Muito Bem") {
                setImage(Monkeys[monkey?.skin ?? 0].idle);
            }
        }

    },[hungry, fun, sleepStatus]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isSleeping) {
            interval = setInterval(() => {
                setSleepStatus((prevStatus) => {
                    const newStatus = prevStatus + 1;
                    
                    if (newStatus >= 100) {
                        setIsSleeping(false); 
                        setImage(Monkeys[monkey?.skin ?? 0].idle);
                        clearInterval(interval);
                    } else {
                        updateSleepInDB(monkey?.id ?? 0, newStatus);
                    }

                    return newStatus;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isSleeping, monkey?.id]);

    const handleSleepImage = () => {
        if (!isSleeping) {
            setImage(Monkeys[monkey?.skin ?? 0].sitting);

            setTimeout(() => {
                setImage(Monkeys[monkey?.skin ?? 0].sit);
            }, 2000);

            setIsSleeping(true);
            return;
        }

        setImage(Monkeys[monkey?.skin ?? 0].idle);
        setIsSleeping(false);
        return;
    };

    useEffect(() => {
        let decreaseInterval: NodeJS.Timeout;
    
        decreaseInterval = setInterval(() => {
            if (monkey?.id) {
                setSleepStatus((prevStatus) => {
                    const newStatus = Math.max(prevStatus - 1, 0);
                    updateSleepInDB(monkey.id, newStatus);
                    return newStatus;
                });
    
                setFun((prevStatus) => {
                    const newStatus = Math.max(prevStatus - 1, 0);
                    updateFunInDB(monkey.id, newStatus);
                    return newStatus;
                });
    
                setHungry((prevStatus) => {
                    const newStatus = Math.max(prevStatus - 1, 0);
                    updateHungryInDB(monkey.id, newStatus);
                    return newStatus;
                });
            } else {
                console.error("Monkey ID is not valid.");
            }
        }, 5000);
    
        return () => {
            clearInterval(decreaseInterval);
        };
    }, [updateSleepInDB, updateFunInDB, updateHungryInDB, monkey?.id]);
    
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Sala de Cuidados"}></Header>
            <View style={styles.statusCardContainer}>
                <StatusCard status={"Fome"} image={require("../assets/images/food.png")} value={hungry}></StatusCard>
                <StatusCard status={"Sono"} image={require("../assets/images/Bed.png")} value={sleepStatus}></StatusCard>
                <StatusCard status={"Emoção"} image={require("../assets/images/Smiling.png")} value={fun}></StatusCard>
            </View>
            <View style={styles.monkeyInfoContainer}>
                <Text style={styles.textStatus}>{calcularStatusAtual(hungry, sleepStatus, fun)}</Text>
                <MonkeyDisplay image={image}></MonkeyDisplay>
                <Text style={styles.monkeyName}>{monkey?.name}</Text>
            </View>
            <View style={styles.interactionContainer}>

                <TouchableOpacity style={styles.interaction} onPress={() => handleHungry(Number(id))}>
                    <Image source={Foods[food]}></Image>
                    <Text style={styles.interactionText}>Comer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.interaction}  onPress={() => handleSleepImage()}>
                    <Image source={require("../assets/images/sleep.png")}></Image>
                    <Text style={styles.interactionText}>Dormir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.interaction} onPress={() => handleNavigate({pathname:"/game_center",params: {id : id}})}>
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