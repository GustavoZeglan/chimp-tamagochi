import { Monkey } from "@/models/Monkey";
import { useSQLiteContext } from "expo-sqlite";

export function useChimpDatabase() {

    const db = useSQLiteContext();

    const decreaseAllStatus = async () => {

        const chimps = await getChimps();
    
        for (const chimp of chimps) {
            const minutesPassed = (Date.now() - new Date(chimp.lastUpdate).getTime()) / (1000 * 60 * 60);
            console.log(minutesPassed);

            if (Math.floor(minutesPassed) >= 1) {

                const statement = await db.prepareAsync(
                    "UPDATE chimp SET hungry = $hungry, fun = $fun, sleep = $sleep, lastUpdate = $lastUpdate WHERE id = $id"
                );
    
                try {
                    await statement.executeAsync({
                        $hungry: Math.max(0, chimp.hungry - Math.floor(minutesPassed) * 10),
                        $fun: Math.max(0, chimp.fun - Math.floor(minutesPassed) * 10),
                        $sleep: Math.max(0, chimp.sleep - Math.floor(minutesPassed) * 10),
                        $updated_at: new Date().toISOString(), // Atualiza com a data atual
                        $id: chimp.id
                    });
                    console.log(Math.max(0, chimp.hungry - Math.floor(minutesPassed) * 10),);
                    console.log(Math.max(0, chimp.fun - Math.floor(minutesPassed) * 10),);
                    console.log(Math.max(0, chimp.sleep - Math.floor(minutesPassed) * 10),);
                } catch (error) {
                    throw error;
                } finally {
                    await statement.finalizeAsync();
                }
            }
        }

    }

    const createChimp = async ({ name, skin }: { name: string, skin: number }) => {

        const statement = await db.prepareAsync(`
            INSERT INTO chimp(name, skin, hungry, sleep, fun, lastUpdate) VALUES ($name, $skin, 70, 70, 70, $lastUpdate);
        `);

        try {
            await statement.executeAsync({ $name: name, $skin: skin, $lastUpdate: new Date().toISOString() });
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

        const statement = await db.prepareAsync(`UPDATE chimp SET hungry = $hungry, lastUpdate = $lastUpdate WHERE id = $id`);

        try {
            await statement.executeAsync({ $hungry: hungry, $lastUpdate: new Date().toISOString(), $id: id });
        } catch (e) {
            throw e;
        } finally {
            statement.finalizeSync();
        }
    }

    async function updateFun(id: number, fun: number) {

        const query = await db.prepareAsync(`
            UPDATE chimp SET fun = $fun, lastUpdate = $lastUpdate WHERE id = $id
        `);
        try {
            await query.executeAsync({ $id: id, $fun: fun, $lastUpdate: new Date().toISOString() });
        } catch (e) {
            throw e;
        } finally {
            query.finalizeSync();
        }
    }

    async function updateSleep(id: number, sleep: number) {


        const statement = await db.prepareAsync(`UPDATE chimp SET sleep = $sleep, lastUpdate = $lastUpdate WHERE id = $id`);

        try {
            await statement.executeAsync({ $sleep: sleep, $lastUpdate: new Date().toISOString(), $id: id });
        } catch (e) {
            throw e;
        } finally {
            statement.finalizeSync();
        }

    }


    return { createChimp, getChimps, getLastChimp, getChimpById, updateHungry, updateSleep, updateFun, decreaseAllStatus }

}

export default useChimpDatabase;