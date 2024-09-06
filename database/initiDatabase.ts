import { SQLiteDatabase } from "expo-sqlite";

export async function initDatabase(db: SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS chimp ( 
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            imgPath TEXT,
            hungry INTEGER,
            sleep INTEGER,
            fun INTEGER
        );
    `);
}
