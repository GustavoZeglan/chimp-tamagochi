import { MonkeyAssets } from "@/models/Monkey"
import { ImageBackground } from "react-native"
import { ResizeMode, Video } from "expo-av";
import {styles} from "./styles";

interface MonkeyDisplayProps {
    monkey: MonkeyAssets
}

export const MonkeyDisplay = ({monkey}: MonkeyDisplayProps) => {

    return (
        <>
            <ImageBackground source={require("../../assets/images/MonkeyDisplay.png")} style={styles.Container}>
                <Video ref={null} source={monkey.idle} shouldPlay={true} resizeMode={ResizeMode.CONTAIN} isLooping={true} style={styles.Video}/>
            </ImageBackground>
        </>
    )
}