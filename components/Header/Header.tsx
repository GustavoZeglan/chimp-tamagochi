import {Image, Text, View} from "react-native";
import {headerIconStyle, headerStyle, headerTextStyle} from "@/components/Header/HeaderStyle";



const openDoorIcon = require("../../assets/images/openDoorIcon.png")

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <View style={headerStyle.container}>
            <Text style={headerTextStyle.primaryText}>{title}</Text>
            <View style={headerIconStyle.container}>
                <Image source={openDoorIcon}></Image>
                <Text style={headerIconStyle.text}>Inicio</Text>
            </View>
        </View>
    )
}

export default Header;