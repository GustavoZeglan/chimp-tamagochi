import { ImageBackground, ImageBackgroundProps, View } from "react-native"
import {styles} from "./styles";

interface MonkeyDisplayProps {
    image: ImageBackgroundProps
}

export const MonkeyDisplay = ({image}: MonkeyDisplayProps) => {

    return (
        <>
            <ImageBackground source={require("../../assets/images/MonkeyDisplay.png")} style={styles.Container}>
                <View style={styles.ImageContainer}>
                    <ImageBackground ref={null} source={image} style={styles.Image} resizeMode="contain"/>
                </View>
            </ImageBackground>
        </>
    )
}