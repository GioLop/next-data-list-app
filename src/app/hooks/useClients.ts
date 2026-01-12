import { useEffect, useState } from "react";
import { PaginatedData } from "@/app/types";

export function useClients(page: number, pageSize: number) {
    const [ data, setData ] = useState<PaginatedData | null>(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            
            const response = await fetch(`/api/data/?page=${page}&pageSize=${pageSize}`);
            const result = await response.json();
            
            setData(result as PaginatedData);
            setLoading(false);
        })()
    }, [page, pageSize]);

    return { data, loading }
};