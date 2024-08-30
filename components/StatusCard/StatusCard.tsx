import React from "react";
import {Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View} from "react-native";



type StatusProps = {
    status: string,
    image: ImageSourcePropType,
    value: number
}

const StatusCard = ({status,image,value} : StatusProps) => {
    return (
        <View>
            <ImageBackground
                source={require("../../assets/images/cardImage.png")}
                style={styles.container}
            >
                <Text style={styles.containerText}>{status}</Text>
                <Image source={image}></Image>
                <Text style={styles.containerText}>{value}</Text>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 120,
        display: "flex",
        gap: 12,
        alignItems: "center",
        paddingTop: 16
    },
    containerText: {
        color: "#262B44",
        fontFamily: "PressStart2P",
        fontSize: 12
    }
});

export default StatusCard;