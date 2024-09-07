import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import Header from "@/components/Header";
import useChimpDatabase from "@/database/chimpService";
import {Monkey} from "@/models/Monkey";
import {useEffect, useState} from "react";
import CardMonkey from "@/components/CardMonkey/CardMonkey";
import {Href, useRouter} from "expo-router";

const monkeyList = () => {

    const {getChimps} = useChimpDatabase();
    const [monkeys,setMonkeys] = useState<Monkey[]>();

    const navigation = useRouter();

    const handleNavigate = (route: Href) => {
        navigation.push(route);
    }

    const getAllMonkeys = async () => {
        try{
            const response = await getChimps();
            setMonkeys(response);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMonkeys();
    },[])




    if(!monkeys) return <Text>Carregando....</Text>

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Meus Macacos"}></Header>
            <FlatList
                contentContainerStyle={{padding:16,display:"flex",gap:16}}
                data={monkeys}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => handleNavigate("/monkeyDetails")}>
                       <CardMonkey monkey={item}></CardMonkey>
                    </TouchableOpacity>
            )}>
            </FlatList>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D2939",
    },

})

export default monkeyList;