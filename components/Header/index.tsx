import {Image, Text, View} from "react-native";
import {headerIconStyle, styles, headerTextStyle} from "@/components/Header/styles";

// @ts-ignore
import openDoorIcon from "../../assets/images/openDoorIcon.png";

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={headerTextStyle.primaryText}>{title}</Text>
            <View style={headerIconStyle.container}>
                <Image source={openDoorIcon}></Image>
                <Text style={headerIconStyle.text}>Inicio</Text>
            </View>
        </View>
    )
}

export default Header;