import { Monkey } from "@/models/Monkey"
import { ImageBackground, View } from "react-native"
import { ResizeMode, Video } from "expo-av";
import {styles} from "./styles";

interface MonkeyDisplayProps {
    monkey?: Monkey
}

export const MonkeyDisplay = ({monkey}: MonkeyDisplayProps) => {
    return (
        <>
            <ImageBackground source={require("../../assets/images/MonkeyDisplay.png")} style={styles.Container}>
                <Video ref={null} source={require("../../assets/images/macacopoolIdle.mp4")} shouldPlay={true} resizeMode={ResizeMode.CONTAIN} isLooping={true} style={styles.Video}/>
            </ImageBackground>
        </>
    )
}