import { ImageBackground, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Href, useRouter } from "expo-router";

interface PlayButtonInterface {
    title: string,
    onPress: () => void,
}

export default function PlayButton({title, onPress}: PlayButtonInterface) {

    return (
        <ImageBackground
        source={require("@/assets/images/playbutton.png")}
        style={styles.Container}
      >
        <TouchableOpacity style={styles.Touch} onPress={onPress}>
            <View style={styles.Box}>
              <Text style={styles.Text}>{title}</Text>
            </View>
        </TouchableOpacity>
      </ImageBackground>
    );
}