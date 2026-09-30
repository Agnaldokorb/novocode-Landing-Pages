import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@contexts/ThemeProvider';
import Logo from './Logo';

const renderWithTheme = (ui, { theme = 'light' } = {}) => {
  return render(<ThemeProvider defaultTheme={theme}>{ui}</ThemeProvider>);
};

describe('<Logo />', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders the light logo on light theme', () => {
    renderWithTheme(<Logo />, { theme: 'light' });
    const img = screen.getByAltText(/novocode/i);
    expect(img).toHaveAttribute('src', '/assets/novocode-preto.png');
  });

  it('renders the dark logo on dark theme', () => {
    renderWithTheme(<Logo />, { theme: 'dark' });
    const img = screen.getByAltText(/novocode/i);
    expect(img).toHaveAttribute('src', '/assets/novocode-branco.png');
  });

  it('exposes current theme via data-theme attribute', () => {
    renderWithTheme(<Logo />, { theme: 'dark' });
    const img = screen.getByAltText(/novocode/i);
    expect(img).toHaveAttribute('data-theme', 'dark');
  });
});