import {Image, Text, TouchableOpacity, View} from "react-native";
import {headerIconStyle, styles, headerTextStyle} from "@/components/Header/styles";

// @ts-ignore
import openDoorIcon from "../../assets/images/openDoorIcon.png";
import {Href, useRouter} from "expo-router";

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {

    const router = useRouter();
    const handleNavigate = (route: Href) => {
        router.navigate(route);
    }


    return (
        <View style={styles.container}>
            <Text style={headerTextStyle.primaryText}>{title}</Text>
            <TouchableOpacity style={headerIconStyle.container} onPress={()=>handleNavigate("/")}>
                <Image source={openDoorIcon}></Image>
                <Text style={headerIconStyle.text}>Inicio</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header;