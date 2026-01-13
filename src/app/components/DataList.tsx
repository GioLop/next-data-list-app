'use client'

import { useSearchParams } from 'next/navigation';
import { useClients } from '@/app/hooks/useClients';
import Paginator from '@/app/components/Paginator';
import ClientItem from '@/app/components/ClientItem';
import Header from '@/app/components/Header';
import TableHeader from '@/app/components/TableHeader';

const PAGE_SIZE = 20;

export default function DataList() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  const { data, loading } = useClients(page, PAGE_SIZE);

  if (loading || !data) return (<div> Loading...</div>);
  
  return (
    <main className='min-h-screen flex justify-center bg-white px-6'>
      <section className='mx-auto w-4xl'>
        <Header />
        <Paginator page={data.page} total={data.total} pageSize={data.pageSize}/>
        <TableHeader/>
        
        <ul className='divide-y divide-gray-300' data-testid="clients-list">
          {data.data.map(client => (
            <ClientItem
              key={client.id}
              name={`${client.name.first} ${client.name.middle} ${client.name.last}`}
              job={client.job.title}
              address={`${client.location.street} ${client.location.city} ${client.location.state}`}/>
          ))}
        </ul>
        
        <Paginator page={data.page} total={data.total} pageSize={data.pageSize}/>
      </section>
    </main>
  );
}
