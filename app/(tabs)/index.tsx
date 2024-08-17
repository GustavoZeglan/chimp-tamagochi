import {Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <View style={styles.Container}>
            {/*<Image style={styles.BackgroundImage} source={require('@/assets/images/cenaries/where-dreams-go-to-die.png')} />*/}

            {/*<Image style={styles.MonkeyImage} source={require('@/assets/images/default_monkey_sprite.jpeg')} />*/}
        </View>
    );
}

const styles = StyleSheet.create({
  Container: {
      height: "100%",
      position: "relative",
      backgroundColor: "#f5f5f5",
  },
  BackgroundImage: {
      height: "100%",
      width: "100%",
  },
  MonkeyImage: {
      position: "absolute",
      bottom: 0,
  }
});
