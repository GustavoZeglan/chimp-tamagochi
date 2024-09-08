import { Monkey } from "@/models/Monkey";
import { useSQLiteContext } from "expo-sqlite";

export function useChimpDatabase() {
    
    const db = useSQLiteContext();

    const createChimp = async ({name, skin}: {name: string, skin: number}) => {

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
            await statement.executeAsync({$name:name, $skin:skin, $lastUpdate: date});
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
        } catch(e) {
            throw e;
        }
    }

    async function getLastChimp() {
        try {
            const response = await db.getFirstAsync<Monkey>(`SELECT * FROM chimp ORDER BY id DESC LIMIT 1;`);
            
            return response;
        } catch(e) {
            throw e;
        }
    }

    async function getChimpById(id: number) {
        try {
            const query = `SELECT * FROM chimp WHERE id = ?`;
            const res = await db.getFirstAsync<Monkey>(query, id);
            
            return res;
        } catch(e) {
            throw e;
        }
    }

    async function updateHungry(id: number, hungry: number) {
        
        const statement = await db.prepareAsync(`UPDATE chimp SET hungry = $hungry WHERE id = $id`);
        
        try {
            await statement.executeAsync({$hungry:hungry, $id:id});
        } catch(e) {
            throw e;
        } finally {
            statement.finalizeSync();
        }
    }

    async function updateFun(id: number, fun: number) {
        const query = await db.prepareAsync(`
            UPDATE INTO chimp SET fun = $fun WHERE id = $id
        `);
        try{
            await query.executeAsync({$id:id,$fun:fun});
        }catch(e){
            throw e;
        }finally{
            query.finalizeSync();
        }
    }

    return { createChimp, getChimps, getLastChimp, getChimpById, updateHungry,updateFun}

}

export default useChimpDatabase;