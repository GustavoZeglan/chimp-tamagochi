import { MonkeyAssets } from "@/models/Monkey"
import { Image, ImageBackground } from "react-native"
import { ResizeMode, Video } from "expo-av";
import {styles} from "./styles";

interface MonkeyDisplayProps {
    monkey: MonkeyAssets
}

export const MonkeyDisplay = ({monkey}: MonkeyDisplayProps) => {

    return (
        <>
            <ImageBackground source={require("../../assets/images/MonkeyDisplay.png")} style={styles.Container}>
                <ImageBackground ref={null} source={monkey.idle} style={styles.Video}/>
            </ImageBackground>
        </>
    )
}