import { ImageBackground, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Href, useRouter } from "expo-router";

interface PlayButtonInterface {
    title: string,
    href: Href,
}

export default function PlayButton({title, href}: PlayButtonInterface) {

    const navigation = useRouter(); // Obtém a função de navegação

    const handlePress = () => {
      navigation.push(href); // Navega para a nova rota usando replace
    };
  
    return (
        <ImageBackground
        source={require("@/assets/images/playbutton.png")}
        style={styles.Container}
      >
        <TouchableOpacity style={styles.Touch} onPress={handlePress}>
            <View style={styles.Box}>
              <Text style={styles.Text}>{title}</Text>
            </View>
        </TouchableOpacity>
      </ImageBackground>
    );
}