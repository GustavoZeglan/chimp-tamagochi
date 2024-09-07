// import {Image} from "expo-av";
import { Image, ImageBackground, ImageBackgroundProps } from "react-native";

export type Monkey = {
    id: number,
    name: string,
    skin: number,
    fun: number,
    sleep: number,
    hungry: number,
    lastUpdate: Date,
}

export interface MonkeyAssets {
    idle: ImageBackgroundProps,
    sitting: ImageBackgroundProps,
    sit: ImageBackgroundProps,
    cry: ImageBackgroundProps,
    // running: NodeRequire,
    // jump: ImageBackgroundProps
}