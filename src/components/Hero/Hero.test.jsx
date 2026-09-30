import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@contexts/ThemeProvider';
import Hero from './Hero';

describe('<Hero />', () => {
  it('renders headline and CTAs', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <Hero />
      </ThemeProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /quero meu site/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /como funciona/i })).toBeInTheDocument();
  });

  it('calls onCtaClick when primary CTA is clicked', () => {
    const handler = vi.fn();
    render(
      <ThemeProvider defaultTheme="light">
        <Hero onCtaClick={handler} />
      </ThemeProvider>
    );
    screen.getByRole('button', { name: /quero meu site/i }).click();
    expect(handler).toHaveBeenCalled();
  });
});