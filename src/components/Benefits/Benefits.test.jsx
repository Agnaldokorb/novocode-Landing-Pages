import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Benefits from '@components/Benefits';

describe('<Benefits />', () => {
  it('renders benefits section with at least one benefit title', () => {
    render(<Benefits />);
    expect(screen.getByRole('heading', { name: /um modelo que coloca você no centro/i })).toBeInTheDocument();
    expect(screen.getByText(/Você decide o valor/i)).toBeInTheDocument();
    expect(screen.getByText(/Sem mensalidade/i)).toBeInTheDocument();
  });
});