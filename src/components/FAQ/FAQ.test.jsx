import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FAQ from '@components/FAQ';

describe('<FAQ />', () => {
  it('renders FAQ section with the first question expanded by default', () => {
    render(<FAQ />);
    expect(screen.getByRole('heading', { name: /perguntas frequentes/i })).toBeInTheDocument();
    expect(screen.getByText(/o que está incluso no projeto/i)).toBeVisible();
  });

  it('mentions that hospedagem e domínio não estão inclusos', () => {
    render(<FAQ />);
    expect(screen.getByText(/hospedagem e domínio estão inclusos/i)).toBeInTheDocument();
  });
});