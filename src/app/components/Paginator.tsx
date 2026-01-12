import { useRouter, useSearchParams } from 'next/navigation';

const CTAS = {
    PREVIOUS: '<< Prev',
    NEXT: 'Next >>'
};

type PaginatoProps = {
    page: number;
    total: number;
    pageSize: number;
};

export default function Paginator({ page, total, pageSize }:PaginatoProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const totalPages = Math.ceil(total / pageSize);

    const handleGoToPage = (page: number) => () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        router.push(`?${params.toString()}`);
    };

    return (
        <div>
            <button
                disabled={page === 1} 
                onClick={handleGoToPage(page - 1)}>
                { CTAS.PREVIOUS }
            </button>
            
            { Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={handleGoToPage(index + 1)}>
                    {index + 1}
                </button>
            )) }
            
            <button
                disabled={page === totalPages} 
                onClick={handleGoToPage(page + 1)}>
                { CTAS.NEXT }
            </button>
        </div>
    )
}