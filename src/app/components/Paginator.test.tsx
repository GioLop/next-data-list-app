import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Paginator, { CTAS } from './Paginator';
import { useRouter, useSearchParams } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('Paginator component', () => {
  let mockPush: ReturnType<typeof vi.fn>;
  let mockSearchParams: URLSearchParams;

  beforeEach(() => {
    mockPush = vi.fn();
    mockSearchParams = new URLSearchParams('page=1');

    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({
      push: mockPush,
    });

    (useSearchParams as ReturnType<typeof vi.fn>).mockReturnValue(mockSearchParams);
  });

  it('should render page numbers based on total and pageSize', () => {
    render(<Paginator page={1} total={100} pageSize={20} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should disable previous button on first page', () => {
    render(<Paginator page={1} total={100} pageSize={20} />);
    
    const prevButton = screen.getByText(CTAS.PREVIOUS);
    expect(prevButton).toBeDisabled();
  });

  it('should disable next button on last page', () => {
    render(<Paginator page={5} total={100} pageSize={20} />);
    
    const nextButton = screen.getByText(CTAS.NEXT);
    expect(nextButton).toBeDisabled();
  });

  it('should navigate to previous page when prev button is clicked', () => {
    render(<Paginator page={2} total={100} pageSize={20} />);
    
    const prevButton = screen.getByText(CTAS.PREVIOUS);
    fireEvent.click(prevButton);
    
    expect(mockPush).toHaveBeenCalledWith('?page=1');
  });

  it('should navigate to next page when next button is clicked', () => {
    render(<Paginator page={1} total={100} pageSize={20} />);
    
    const nextButton = screen.getByText(CTAS.NEXT);
    fireEvent.click(nextButton);
    
    expect(mockPush).toHaveBeenCalledWith('?page=2');
  });

  it('should navigate to specific page when page number is clicked', () => {
    render(<Paginator page={1} total={100} pageSize={20} />);
    
    const page3Button = screen.getByRole('button', { name: '3' });
    fireEvent.click(page3Button);
    
    expect(mockPush).toHaveBeenCalledWith('?page=3');
  });

  it('should highlight the current page with font-semibold', () => {
    render(<Paginator page={2} total={100} pageSize={20} />);
    
    const currentPageButton = screen.getByRole('button', { name: '2' });
    expect(currentPageButton).toHaveClass('font-semibold');
  });
});