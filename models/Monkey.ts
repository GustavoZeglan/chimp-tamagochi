import {AVPlaybackSource} from "expo-av";

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
    idle: AVPlaybackSource,
    sitting: AVPlaybackSource,
    sit: AVPlaybackSource,
    cry: AVPlaybackSource,
    running: NodeRequire,
    jump: AVPlaybackSource
}