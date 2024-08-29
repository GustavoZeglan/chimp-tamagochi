import { ImageBackground, View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";

interface PlayButtonInterface {
    title: string,
    onPress: () => void, 
}

export default function PlayButton({title, onPress}: PlayButtonInterface) {
    return (
        <View style={styles.Container}>
            <TouchableHighlight onPress={onPress}>
                <ImageBackground source={require("@/assets/images/playbutton.png")} style={styles.Image}>
                    <Text style={styles.Text}>{title}</Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    );
}