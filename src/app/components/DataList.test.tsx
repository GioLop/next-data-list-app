import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useClients } from '@/app/hooks/useClients';
import DataList from './DataList';
import { useSearchParams } from 'next/navigation';

vi.mock('@/app/hooks/useClients', () => ({
  useClients: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn(),
}));

vi.mock("@/app/components/Paginator", () => ({
  default: vi.fn(() => null),
}));

describe('DataList component', () => {
    beforeEach(() => {
        (useClients as vi.mock).mockClear();
    });
    
    afterEach(() => {
        (useClients as vi.mock).mockClear();
    });

    it('should render data when loaded', () => {
        (useSearchParams as vi.mock).mockReturnValue(
            new URLSearchParams("page=1")
        );
        const mockData = {
            data: [{
                id: '1',
                phoneNumber: '123-456-7890',
                name: { first: 'John', middle: 'M', last: 'Doe' },
                username: 'johndoe',
                email: ['john@example.com'],
                location: { street: '123 Main', city: 'NYC', state: 'NY', country: 'USA', zip: '10001', coordinates: { latitude: '40.7128', longitude: '-74.0060' } },
                job: { title: 'Developer', descriptor: 'Software', area: 'Tech', type: 'Full-time', company: 'Acme' },
                creditCard: { number: '1234', cvv: '123', issuer: 'Visa' }
            }],
            page: 1,
            pageSize: 20,
            total: 100
        };

        (useClients as vi.mock).mockReturnValue({
            data: mockData,
            loading: false
        });

        render(<DataList />);
        
        expect(screen.getByText('John M Doe')).toBeInTheDocument();
        expect(screen.getByText('123 Main NYC NY')).toBeInTheDocument();
        expect(screen.getByText('Developer')).toBeInTheDocument();
    });
    
    it('should render loading state when data is loading', () => {
        (useSearchParams as vi.mock).mockReturnValue(
            new URLSearchParams("page=2")
        );

        (useClients as vi.mock).mockReturnValue({
            data: null,
            loading: true
        });

        render(<DataList />);
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});