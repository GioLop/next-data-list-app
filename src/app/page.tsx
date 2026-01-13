'use client'

import { Suspense } from 'react';
import DataList from '@/app/components/DataList';

export default function Home() {
  return (
    <Suspense fallback={<div> Loading...</div>}>
      <DataList />
    </Suspense>
  );
}