import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HowItWorks from '@components/HowItWorks';

describe('<HowItWorks />', () => {
  it('renders the process steps', () => {
    render(<HowItWorks />);
    expect(screen.getByRole('heading', { name: /do briefing à entrega/i })).toBeInTheDocument();
    expect(screen.getByText(/Diagnóstico/i)).toBeInTheDocument();
    expect(screen.getByText(/Design \+ protótipo/i)).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvimento/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrega e publicação/i)).toBeInTheDocument();
  });
});