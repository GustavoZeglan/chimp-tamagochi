import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Href, useGlobalSearchParams, useRouter} from "expo-router";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import * as Location from "expo-location";
import useChimpDatabase from "@/database/chimpService";
import {Monkey} from "@/models/Monkey";




const guessTempGame = () => {


    const {id} = useGlobalSearchParams();
    const {getChimpById,updateFun} = useChimpDatabase();

    const [weather,setWeather] = useState();
    const [lat,setLat] = useState<number>();
    const [lon,setLon] = useState<number>();
    const [resultado,setResultado] = useState<string>();
    const [errorMsg,setErrorMsg] = useState("");
    const [chute,setChute] = useState<number>();
    const [monkey,setMonkey] = useState<Monkey>();

    const router = useRouter();

    const handleNavigate = (route : Href) => {
        router.navigate(route);
    }


    const getPermissionLocation = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            setErrorMsg("Permissão para Acessar a localização foi NEGADA!");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        return;
    }

    const getCurrentWeather =  async () => {
        try{
            const response = await axios.get(`
            https://api.weatherapi.com/v1/current.json?key=2ce57ca1d0494c4b8fb224433241906&q=${lat},${lon}8&aqi=no
            `);
            setWeather(response.data.current.temp_c);
            console.log(response.data.current.temp_c);
        }catch(error){
            console.log(error);
        }
    }

    const compareChute = async () => {
        if(chute === weather) {
           setResultado("Acertou!");
            await handleVictoryFun();
        }else {
            setResultado("Errou");
            await handleDefeatFun();
        }
    }

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
        if(monkey?.fun && monkey.fun  - 1 <= 0) {
            await updateFun(Number(id),0);
            getChimp(Number(id));
            return ;
        }
        await updateFun(Number(id),monkey!.fun - 1);
        getChimp(Number(id));
        return;
    }


    useEffect(() => {
        getChimp(Number(id));
        getPermissionLocation()
    },[])
    useEffect(() => {
        getCurrentWeather();
    }, [lat,lon]);




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adivinhe a Temperatura</Text>
            <Text style={styles.supText}>Como jogar?</Text>
            <Text style={styles.descriptionText}>O jogo consiste em descobrir qual é a temperatura atual baseado em sua localização</Text>
            <TextInput
                keyboardType={"numeric"}
                style={styles.textInput}
                placeholder={"Insira seu chute"}
                placeholderTextColor={"black"}
                onChangeText={valor => setChute(Number(valor))}
            ></TextInput>
            <TouchableOpacity
                disabled={resultado === "Acertou!"}
                style={styles.button}
                onPress={compareChute}>
                <Text style={{color:"white",fontFamily:"PressStart2P"}}>Chutar</Text>
            </TouchableOpacity>
            <Text style={resultado === "Acertou!" ? styles.resultadoTextWinner : styles.resultadoTextLoser}>{resultado}</Text>
            <TouchableOpacity style={styles.backButton} onPress={()=>handleNavigate("..")}>
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
    backButton: {backgroundColor:"#7f8ea7",width:"90%",borderRadius:8,padding:8,marginTop:64},
    resultadoTextWinner:{fontSize:16,color:"green",fontFamily:"PressStart2P",textAlign:"center"},
    resultadoTextLoser:{fontSize:16,color:"red",fontFamily:"PressStart2P",textAlign:"center"},
})

export default guessTempGame;