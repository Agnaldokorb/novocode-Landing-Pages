import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from '@components/Features';

describe('<Features />', () => {
  it('renders services section heading and at least one card', () => {
    render(<Features />);
    expect(screen.getByRole('heading', { name: /serviços sob medida/i })).toBeInTheDocument();
    expect(screen.getByText(/Landing Pages de alta conversão/i)).toBeInTheDocument();
    expect(screen.getByText(/Sites institucionais completos/i)).toBeInTheDocument();
  });
});