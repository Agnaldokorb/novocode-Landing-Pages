import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@contexts/ThemeProvider';
import ThemeToggle from './ThemeToggle';

const renderToggle = (initialTheme = 'light') => {
  return render(
    <ThemeProvider defaultTheme={initialTheme}>
      <ThemeToggle />
    </ThemeProvider>
  );
};

describe('<ThemeToggle />', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('toggles theme on click', async () => {
    const user = userEvent.setup();
    renderToggle('light');
    const btn = screen.getByRole('button', { name: /trocar para tema escuro/i });
    await user.click(btn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('reflects aria-pressed state', () => {
    renderToggle('dark');
    expect(screen.getByRole('button', { name: /tema claro/i })).toHaveAttribute('aria-pressed', 'true');
  });

  it('persists theme in localStorage', async () => {
    const user = userEvent.setup();
    renderToggle('light');
    await user.click(screen.getByRole('button'));
    expect(window.localStorage.getItem('novocode-theme')).toBe('dark');
  });
});