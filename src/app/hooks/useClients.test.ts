import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from "@testing-library/react"
import { PaginatedData } from "@/app/types";
import { useClients } from './useClients';

describe('useClients hook', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');

    it('should fetch the data and set the data and loading values', async () => {
        const page = 1;
        const pageSize = 20;

        const mockedData: PaginatedData = {
            data: Array.from({ length: 20 }, (_, i) => ({
                id: `${i}`,
                phoneNumber: '123-456-7890',
                name: { first: 'John', middle: 'M', last: 'Doe' },
                username: `user${i}`,
                email: ['john@example.com'],
                location: { street: '123 Main St', city: 'NYC', state: 'NY', country: 'USA', zip: '10001', coordinates: { latitude: '40.7128', longitude: '-74.0060' } },
                job: { title: 'Developer', descriptor: 'Software', area: 'Tech', type: 'Full-time', company: 'Acme' },
                creditCard: { number: '1234', cvv: '123', issuer: 'Visa' }
            })),
            page: 1,
            pageSize: 20,
            total: 300
        };

        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockedData)
        } as Response);

        const { result } = renderHook(() => useClients(page, pageSize));
 
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });
        
        expect(result.current.data).toEqual(mockedData);
        expect(fetchSpy).toHaveBeenCalledWith(`/api/data/?page=${page}&pageSize=${pageSize}`);
    });
});