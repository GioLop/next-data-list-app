import { Client } from "@/app/types";

const EXTERNAL_API_URL_SOURCE = 'https://dummyjson.com/c/81a3-7acb-406a-8571';

export const MESSAGES = {
    ERROR: 'Failed to fetch clients data set'
};

let localCache: Client[] = [];

export function clearCache() {
    localCache = [];
}

export async function loadClientsDataSet ():Promise<Client[]> {
    if (localCache.length > 0) return localCache;

    try {
        const response = await fetch(EXTERNAL_API_URL_SOURCE);

        if (!response.ok) throw new Error(MESSAGES.ERROR);
        
        const data = await response.json();
        localCache = data.result;
    } catch (error) {
        console.error((error as Error).message);
    }

    return localCache;
};