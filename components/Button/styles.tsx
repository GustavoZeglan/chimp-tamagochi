import {StyleSheet} from "react-native";
import {string} from "prop-types";

const tintColorYellow: string = "#CFA740";
const tintColorGrey: string = "#7F8EA7";
const tintColorDarkGrey: string = "#373030";
const tintColorWhite: string = "#fff";

const ButtonStyles = StyleSheet.create({
    primary: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: tintColorYellow,
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
    },
    secondary: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: tintColorGrey,
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
    }
})

const TextStyles = StyleSheet.create({
    primary: {
        paddingTop: 10,
        fontSize: 16,
        color: tintColorDarkGrey,
        fontFamily: "PressStart2P"
    },
    secondary: {
        paddingTop: 10,
        fontSize: 16,
        color: tintColorWhite,
        fontFamily: "PressStart2P"
    }
})

export {
    ButtonStyles,
    TextStyles,
};