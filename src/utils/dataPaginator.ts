export function dataPaginator<T>(
    data: T[],
    page: number,
    pageSize: number
) {
    const total = data.length;
    const start = (page - 1) * pageSize;

    return {
        data: data.slice(start, start + pageSize),
        page,
        pageSize,
        total
    }
};