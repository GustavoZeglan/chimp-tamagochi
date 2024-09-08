import { ImageBackground, ImageBackgroundProps } from "react-native"
import {styles} from "./styles";

interface MonkeyDisplayProps {
    image: ImageBackgroundProps
}

export const MonkeyDisplay = ({image}: MonkeyDisplayProps) => {

    return (
        <>
            <ImageBackground source={require("../../assets/images/MonkeyDisplay.png")} style={styles.Container}>
                <ImageBackground ref={null} source={image} style={styles.Video}/>
            </ImageBackground>
        </>
    )
}