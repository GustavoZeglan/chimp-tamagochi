import {ImageBackgroundProps, StyleSheet, Text, View} from "react-native"
import {Monkey} from "@/models/Monkey";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import {Monkeys} from "@/mock/monkeys";
import StatusCard from "@/components/StatusCard/StatusCard";
import { calcularStatusAtual } from "@/utils/calculateActualStatus";
import { useEffect, useState } from "react";

type MonkeyProps = {
    monkey: Monkey
}

const CardMonkey = ({monkey}:MonkeyProps) => {

    const [image, setImage] = useState<ImageBackgroundProps>(Monkeys[monkey.skin].idle);

    useEffect(() => {
        if (calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) == "Morto") {
            setImage(require("@/assets/images/tombstone.png"));
            return;
        }

        if (calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) === "Crítico" || calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) === "Muito Triste" || calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) === "Triste") {
            setImage(Monkeys[monkey?.skin ?? 0].cry);
            return;
        } 

        if (calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) === "Bem" || calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) == "OK" || calcularStatusAtual(monkey.hungry, monkey.sleep, monkey.fun) === "Muito Bem") {
            setImage(Monkeys[monkey?.skin ?? 0].idle);
        }
    },[]);

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.textMonkeyName}>{monkey.name}</Text>
            <Text style={styles.statusText} >{calcularStatusAtual(monkey.hungry,monkey.sleep,monkey.fun)}</Text>
            <MonkeyDisplay image={image}></MonkeyDisplay>
            <View style={styles.statusCardsContainer}>
                <StatusCard status={"Fome"} image={require("../../assets/images/foodWhite.png")} value={monkey.hungry}/>
                <StatusCard status={"Sono"} image={require("../../assets/images/sleepicon.png")} value={monkey.sleep}/>
                <StatusCard status={"Emoção"} image={require("../../assets/images/Smiling.png")} value={monkey.fun}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        display: "flex",
        alignItems:"center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#8b9bb4",
        borderRadius: 8,
    },
    textMonkeyName: {
        fontSize: 20,
        padding:16,
        fontFamily: "PressStart2P",
        color: "white",
        width: 200,
        textAlign: "center"
    },
    statusText:{
        fontSize: 20,
        fontFamily: "PressStart2P",
        color: "white",
    },
    statusCardsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 16
    }
})

export default CardMonkey;