import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { loadClientsDataSet, clearCache, MESSAGES } from './loadClientsDataSet';
import { mockUsers } from '@/test/mocks/mockUsers';

describe('loadClientsDataSet function', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const errorSpy = vi.spyOn(globalThis, 'Error');

    beforeEach(() => {
        vi.resetModules();
        fetchSpy.mockClear();
    });
    
    afterEach(() => {
        vi.resetModules();
        fetchSpy.mockClear();
    });
    
    it('should call the endpoint if there is no data cached previously', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockUsers)
        } as Response);

        await loadClientsDataSet();

        expect(fetchSpy).toHaveBeenCalledTimes(1);
    });

    it('should not call the endpoint if there is data cached previously', async () => {
        fetchSpy.mockRejectedValue(new Error('Error'));

        await loadClientsDataSet();

        expect(fetchSpy).toHaveBeenCalledTimes(0);
    });

    it('should handle an error gracefully', async () => {
        clearCache();
        
        fetchSpy.mockResolvedValueOnce({
            ok: false,
            status: 404,
            json: () => Promise.resolve({ error: 'Not Found' })
        } as Response);
        
        const result = await loadClientsDataSet();
        
        expect(errorSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalledWith(MESSAGES.ERROR);
        expect(result).toEqual([]);
    });
});