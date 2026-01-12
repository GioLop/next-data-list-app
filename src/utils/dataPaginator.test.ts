import { describe, it, expect } from 'vitest';
import { dataPaginator } from './dataPaginator';

describe('dataPaginator function', () => { 
    it('should return can object with the page and items asked', () => {
        const data = Array.from({ length: 20 }, (_, index) => index);
        const paginatedData =  dataPaginator(data, 1, 5);
        
        const expectedResult = {
            "data": [0, 1, 2, 3, 4],
            "page": 1,
            "pageSize": 5,
            "total": 20,
        };

        expect(paginatedData).toEqual(expectedResult);
    });
});
