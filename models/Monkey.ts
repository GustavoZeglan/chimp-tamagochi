import {AVPlaybackSource} from "expo-av";

export type Monkey = {
    name: string,
    assets: MonkeyAssets
}

export interface MonkeyAssets {
    idle: AVPlaybackSource,
    sitting: AVPlaybackSource,
    sit: AVPlaybackSource,
    cry: AVPlaybackSource,
    running: NodeRequire,
    jump: AVPlaybackSource
}