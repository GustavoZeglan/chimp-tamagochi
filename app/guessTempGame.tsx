import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const guessTempGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adivinhe a Temperatura</Text>
            <Text style={styles.supText}>Como jogar?</Text>
            <Text style={styles.descriptionText}>O jogo consiste em descobrir qual é a temperatura atual baseado em sua localização</Text>
            <TextInput style={styles.textInput} placeholder={"Insira seu chute"} placeholderTextColor={"black"}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:"white",fontFamily:"PressStart2P"}}>Chutar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton}>
                <Text style={{color:"white",fontFamily:"PressStart2P"}}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262b44",
        paddingTop: 64,
        padding: 16,
        alignItems: "center",
        gap: 16
    },
    title : {fontSize:24,color:"white",fontFamily:"PressStart2P",textAlign:"center"},
    supText: {fontSize:16,color:"white",fontFamily:"PressStart2P",textAlign:"center"},
    descriptionText: {fontSize:12,color:"white",fontFamily:"PressStart2P",textAlign:"center"},
    textInput: {fontFamily:"PressStart2P",backgroundColor:"white",width:"90%",fontSize:10,borderRadius:8,padding:8},
    button: {backgroundColor:"green",width:"90%",borderRadius:8,padding:8},
    backButton: {backgroundColor:"#7f8ea7",width:"90%",borderRadius:8,padding:8,marginTop:64}
})

export default guessTempGame;