import {StyleSheet, Text, View} from "react-native"
import {Monkey} from "@/models/Monkey";
import {MonkeyDisplay} from "@/components/MonkeyDisplay";
import {Monkeys} from "@/mock/monkeys";
import StatusCard from "@/components/StatusCard/StatusCard";

type MonkeyProps = {
    monkey: Monkey
}


const CardMonkey = ({monkey}:MonkeyProps) => {

    const calcularStatusAtual = (fome:number,sono:number,emocao:number) : string => {
        const resultado : number = fome+sono+emocao;
        let status : string = "";
        if(resultado == 0){
            status = "Morto";
        }else if(resultado <= 50){
            status = "Crítico";
        }else if(resultado <= 100){
            status = "Muito Triste";
        }else if(resultado <= 150){
            status = "Triste";
        }else if(resultado <= 200){
            status = "Ok";
        }else if(resultado <= 250){
            status = "Bem";
        }else{
            status = "Muito bem";
        }
        return status;

    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.textMonkeyName}>{monkey.name}</Text>
            <Text style={styles.statusText} >{calcularStatusAtual(monkey.hungry,monkey.sleep,monkey.fun)}</Text>
            <MonkeyDisplay monkey={Monkeys[monkey.skin]}></MonkeyDisplay>
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