import {StyleSheet} from "react-native";


const headerStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#3f2832",
        height: 100,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 24,
        paddingTop: 32
    }
});
const headerTextStyle =  StyleSheet.create({
    primaryText: {
        fontSize: 20,
        fontFamily: "PressStart2P",
        color: "white",
        width: "70%"
    }
});
const headerIconStyle =  StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    text:{
        color: "white",
        fontFamily: "PressStart2P",
        fontSize: 10
    }
});


export {
    headerStyle,
    headerTextStyle,
    headerIconStyle
}