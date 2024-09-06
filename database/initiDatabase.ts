import { SQLiteDatabase } from "expo-sqlite";

export async function initDatabase(db: SQLiteDatabase) {
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS chimp ( 
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            skin INTEGER,
            hungry INTEGER,
            sleep INTEGER,
            fun INTEGER,
            lastUpdate DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
}
