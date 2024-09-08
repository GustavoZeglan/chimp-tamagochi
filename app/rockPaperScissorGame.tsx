import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {Href, useGlobalSearchParams, useRouter} from "expo-router";
import useChimpDatabase from "@/database/chimpService";
import {Monkey} from "@/models/Monkey";


const rockPaperScissorGame =() => {

    const {updateFun,getChimpById} = useChimpDatabase();
    const {id} = useGlobalSearchParams();


    const [resultado,setResultado] = useState<string>();
    const [randomChoice,setRandomChoice] = useState<string>();
    const [monkey,setMonkey] = useState<Monkey>();

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


    const router = useRouter();
    const handleNavigate = (route: Href) => {
        router.navigate(route);
    }


    const options = ["Rock","Paper","Scissor"];

    function getRandomInt() {
        return Math.floor(Math.random() * options.length);
    }


    const handleVictoryFun = async () => {
        if(monkey?.fun && monkey.fun === 100) {
            return;
        }
        if(monkey?.fun && monkey.fun + 10 >= 100) {
            await updateFun(Number(id),100);
            getChimp(Number(id));
            return;
        }
        await updateFun(Number(id),monkey!.fun + 10);
        getChimp(Number(id));
        return;
    }

    const handleDefeatFun = async () => {
        if(monkey?.fun && monkey.fun === 0) {
            return ;
        }
        if(monkey?.fun && monkey.fun  - 5 <= 0) {
            await updateFun(Number(id),0);
            getChimp(Number(id));
            return ;
        }
        await updateFun(Number(id),monkey!.fun - 5);
        getChimp(Number(id));
        return;
    }

    const handleDrawFun = async () => {
        if(monkey?.fun && monkey.fun == 100) {
            return ;
        }
        if(monkey?.fun && monkey.fun  + 2 >= 100) {
            await updateFun(Number(id),100);
            getChimp(Number(id));
            return ;
        }
        await updateFun(Number(id),monkey!.fun + 2);
        getChimp(Number(id));
        return;
    }



    const play = async (playerChoice : string) => {
        const randomChoice = options[getRandomInt()]
        setRandomChoice(randomChoice);

        // Gustavo guanabara me perdoe por esse codigo
        if (playerChoice === "rock" && randomChoice === "Paper") {
            setResultado("Você Perdeu :(");
            await handleDefeatFun();
        } else if (playerChoice === "rock" && randomChoice === "Scissor") {
            setResultado("Você Ganhou :)");
            await handleVictoryFun();
        } else if (playerChoice === "rock" && randomChoice === "Rock") {
            setResultado("Empate!!!");
            await handleDrawFun();
        } else if (playerChoice === "paper" && randomChoice === "Rock") {
            setResultado("Você Ganhou :)");
            await handleVictoryFun();
        } else if (playerChoice === "paper" && randomChoice === "Scissor") {
            setResultado("Você Perdeu :(");
            await handleDefeatFun();
        } else if (playerChoice === "paper" && randomChoice === "Paper") {
            setResultado("Empate!!!");
            await handleDrawFun();
        } else if (playerChoice === "scissor" && randomChoice === "Rock") {
            setResultado("Você Perdeu :(");
            await handleDefeatFun();
        } else if (playerChoice === "scissor" && randomChoice === "Paper") {
            setResultado("Você Ganhou :)");
            await handleVictoryFun();
        } else if (playerChoice === "scissor" && randomChoice === "Scissor") {
            setResultado("Empate!!!");
            await handleDrawFun();
        }

        console.log("Id: " + Number(id));
        console.log("Fun: " + monkey?.fun)
    }


    useEffect(() => {
        getChimp(Number(id));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Pedra Papel Tesoura</Text>
            <View style={styles.choiceContainer}>

                <TouchableOpacity onPress={()=>play("rock")}>
                    <Image source={require("../assets/images/rockpaperscissorIcons/rock.png")}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>play("paper")}>
                    <Image source={require("../assets/images/rockpaperscissorIcons/paper.png")}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>play("scissor")}>
                 <Image source={require("../assets/images/rockpaperscissorIcons/scissor.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.choiceText}>{randomChoice? "O Macaquinho Escolheu:" : ""}</Text>
                <Text style={styles.randomChoiceText}>{randomChoice}</Text>
                <Text style={resultado === "Você Ganhou :)" ? styles.resultTextWinner : styles.resultTextLoser}>{resultado}</Text>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={()=>handleNavigate("..")}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1,backgroundColor:"#262b44",alignItems:"center",padding:48},
    title : {fontSize:24,color:"white",fontFamily:"PressStart2P",textAlign:"center"},
    choiceContainer:{display:"flex",flexDirection:"row",gap:24,margin:48},
    choiceText:{fontSize:18,color:"white",fontFamily:"PressStart2P",textAlign:"center"},
    randomChoiceText:{fontSize:14,color:"white",fontFamily:"PressStart2P"},
    resultContainer: {display:"flex",gap:8,alignItems:"center"},
    resultTextLoser: {fontSize:14,fontFamily:"PressStart2P",color:"red"},
    resultTextWinner: {fontSize:14,fontFamily:"PressStart2P",color:"green"},
    backButton: {width: "100%",padding:16,backgroundColor:"#7F8EA7",borderRadius:8,marginTop:24},
    backButtonText: {fontSize:18,color:"white",fontFamily:"PressStart2P",textAlign:"center"}
})

export default rockPaperScissorGame;