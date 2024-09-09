import { Monkey } from "@/models/Monkey";
import { useSQLiteContext } from "expo-sqlite";

export function useChimpDatabase() {

    const db = useSQLiteContext();

    const createChimp = async ({ name, skin }: { name: string, skin: number }) => {

        const statement = await db.prepareAsync(`
            INSERT INTO chimp(name, skin, hungry, sleep, fun, lastUpdate) VALUES ($name, $skin, 75, 75, 75, $lastUpdate);
        `);

        const date = new Date().toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        try {
            await statement.executeAsync({ $name: name, $skin: skin, $lastUpdate: date });
        } catch (e) {
            console.error(e);
        } finally {
            statement.finalizeSync();
        }
    }

    async function getChimps() {
        try {
            const response = await db.getAllAsync<Monkey>(`SELECT * FROM chimp;`);

            return response;
        } catch (e) {
            throw e;
        }
    }

    async function getLastChimp() {
        try {
            const response = await db.getFirstAsync<Monkey>(`SELECT * FROM chimp ORDER BY id DESC LIMIT 1;`);

            return response;
        } catch (e) {
            throw e;
        }
    }

    async function getChimpById(id: number) {
        try {
            const query = `SELECT * FROM chimp WHERE id = ?`;
            const res = await db.getFirstAsync<Monkey>(query, id);

            return res;
        } catch (e) {
            throw e;
        }
    }

    async function updateHungry(id: number, hungry: number) {

        const date = new Date().toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        console.log(date);

        const statement = await db.prepareAsync(`UPDATE chimp SET hungry = $hungry, lastUpdate = $lastUpdate WHERE id = $id`);

        try {
            await statement.executeAsync({ $hungry: hungry, $lastUpdate: date, $id: id });
        } catch (e) {
            throw e;
        } finally {
            statement.finalizeSync();
        }
    }

    async function updateFun(id: number, fun: number) {

        const date = new Date().toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        console.log(date);

        const query = await db.prepareAsync(`
            UPDATE chimp SET fun = $fun, lastUpdate = $lastUpdate WHERE id = $id
        `);
        try {
            await query.executeAsync({ $id: id, $fun: fun, $lastUpdate: date });
        } catch (e) {
            throw e;
        } finally {
            query.finalizeSync();
        }
    }

    async function updateSleep(id: number, sleep: number) {

        const date = new Date().toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        console.log(date);

        const statement = await db.prepareAsync(`UPDATE chimp SET sleep = $sleep, lastUpdate = $lastUpdate WHERE id = $id`);

        try {
            await statement.executeAsync({ $sleep: sleep, $lastUpdate: date, $id: id });
        } catch (e) {
            throw e;
        } finally {
            statement.finalizeSync();
        }

    }


    return { createChimp, getChimps, getLastChimp, getChimpById, updateHungry, updateSleep, updateFun }

}

export default useChimpDatabase;