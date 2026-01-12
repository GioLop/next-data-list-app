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
        <section className='my-4 flex items-center justify-center gap-6 text-sm'>
            <button
                className={`${page !== 1  && 'hover:underline cursor-pointer'}`}
                disabled={page === 1} 
                onClick={handleGoToPage(page - 1)}>
                { CTAS.PREVIOUS }
            </button>
            
            <ul className='flex gap-3'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                        <button
                            className={`${page === index +1 && 'font-semibold'} hover:underline cursor-pointer`}
                            onClick={handleGoToPage(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                    
                ))}
            </ul>
            
            
            <button
                className={`${page !== totalPages && 'hover:underline cursor-pointer'}`}
                disabled={page === totalPages} 
                onClick={handleGoToPage(page + 1)}>
                { CTAS.NEXT }
            </button>
        </section>
    )
}