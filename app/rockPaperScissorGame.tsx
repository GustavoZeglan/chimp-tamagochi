import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Href, useRouter} from "expo-router";


const rockPaperScissorGame =() => {

    const [resultado,setResultado] = useState<string>();
    const [randomChoice,setRandomChoice] = useState<string>();

    const router = useRouter();
    const handleNavigate = (route: Href) => {
        router.navigate(route);
    }


    const options = ["Rock","Paper","Scissor"];

    function getRandomInt() {
        return Math.floor(Math.random() * options.length);
    }

    const play = (playerChoice : string) => {
        const randomChoice = options[getRandomInt()]
        setRandomChoice(randomChoice);

        // Gustavo guanabara me perdoe por esse codigo
        if (playerChoice === "rock" && randomChoice === "Paper") {
            setResultado("Você Perdeu :(");
        } else if (playerChoice === "rock" && randomChoice === "Scissor") {
            setResultado("Você Ganhou :)");
        } else if (playerChoice === "rock" && randomChoice === "Rock") {
            setResultado("Empate!!!");
        } else if (playerChoice === "paper" && randomChoice === "Rock") {
            setResultado("Você Ganhou :)");
        } else if (playerChoice === "paper" && randomChoice === "Scissor") {
            setResultado("Você Perdeu :(");
        } else if (playerChoice === "paper" && randomChoice === "Paper") {
            setResultado("Empate!!!");
        } else if (playerChoice === "scissor" && randomChoice === "Rock") {
            setResultado("Você Perdeu :(");
        } else if (playerChoice === "scissor" && randomChoice === "Paper") {
            setResultado("Você Ganhou :)");
        } else if (playerChoice === "scissor" && randomChoice === "Scissor") {
            setResultado("Empate!!!");
        }
    }


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