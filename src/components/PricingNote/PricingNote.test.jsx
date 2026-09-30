import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PricingNote from '@components/PricingNote';

describe('<PricingNote />', () => {
  it('renders the pricing model section', () => {
    render(<PricingNote />);
    expect(screen.getByRole('heading', { name: /pague quanto achar justo/i })).toBeInTheDocument();
    expect(screen.getByText(/hospedagem e domínio não inclusos/i)).toBeInTheDocument();
    expect(screen.getByText(/2 rodadas de revisão inclusas/i)).toBeInTheDocument();
  });
});