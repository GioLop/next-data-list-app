import { NextRequest } from "next/server";
import { loadClientsDataSet } from "@/services/loadClientsDataSet.server";
import { dataPaginator } from "@/utils/dataPaginator";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get('page') ?? 1);
    const pageSize = Number(searchParams.get('pageSize') ?? 20);

    const clientsDataSet = await loadClientsDataSet();
    const result = dataPaginator(clientsDataSet, page, pageSize);

    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}