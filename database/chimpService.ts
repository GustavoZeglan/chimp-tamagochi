import { useSQLiteContext } from "expo-sqlite";

export function useChimpDatabase() {
    
    const db = useSQLiteContext();

    const createChimp = async ({name, imgPath, hungry, sleep, fun}: {name: string, imgPath: string, hungry: number, sleep: number, fun: number}) => {

        const statement = await db.prepareAsync(`
            INSERT INTO Todo(name, imgPath, hungry, sleep, fun) VALUES ($name, $imgPath, $hungry, $sleep, $fun);
        `);


        try {
            await statement.executeAsync({$name:name, $imgPath:imgPath, $hungry: hungry, $sleep: sleep, $fun: fun});
        } catch (e) {
            console.error(e);
        } finally {
            statement.finalizeSync();
        }
    } 

    async function getChimps() {
        try {
            const response = await db.getAllAsync<any>(`SELECT * FROM chimp;`);
            console.log(response);
            
            return response;
        } catch(e) {
            throw e;
        }
    }

    return { createChimp, getChimps }

}

export default useChimpDatabase;