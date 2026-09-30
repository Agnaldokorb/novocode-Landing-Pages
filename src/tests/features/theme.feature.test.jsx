import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@contexts/ThemeProvider';
import ThemeToggle from '@components/ThemeToggle';

/**
 * Feature: Troca de tema
 *   Como visitante do site
 *   Quero poder alternar entre os temas claro e escuro
 *   Para ter uma experiência confortável em qualquer ambiente.
 */
describe('Feature: Troca de tema', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  const renderWithTheme = (initialTheme) =>
    render(
      <ThemeProvider defaultTheme={initialTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );

  it('Scenario: Usuário alterna para tema escuro', async () => {
    // Given que estou no tema claro
    renderWithTheme('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // When clico no botão "Alternar tema"
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /trocar para tema escuro/i }));

    // Then <html data-theme="dark">
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    // And a escolha é persistida no localStorage
    expect(window.localStorage.getItem('novocode-theme')).toBe('dark');
  });

  it('Scenario: Usuário alterna de escuro para claro', async () => {
    // Given que estou no tema escuro
    renderWithTheme('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // When clico no botão de alternar tema
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /trocar para tema claro/i }));

    // Then o tema passa para claro
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    // And a preferência é persistida
    expect(window.localStorage.getItem('novocode-theme')).toBe('light');
  });

  it('Scenario: A logo reflete o tema atual', async () => {
    // Given que carrego a página no tema claro
    const { rerender } = render(
      <ThemeProvider defaultTheme="light">
        <img
          src="/assets/novocode-preto.png"
          alt="NovoCode"
          data-testid="logo-img"
        />
      </ThemeProvider>
    );

    // Then a logo usada é a versão clara
    expect(screen.getByTestId('logo-img')).toHaveAttribute(
      'src',
      '/assets/novocode-preto.png'
    );

    // When o tema muda para escuro
    rerender(
      <ThemeProvider defaultTheme="dark">
        <img
          src="/assets/novocode-branco.png"
          alt="NovoCode"
          data-testid="logo-img"
        />
      </ThemeProvider>
    );

    // Then a logo usada é a versão escura
    expect(screen.getByTestId('logo-img')).toHaveAttribute(
      'src',
      '/assets/novocode-branco.png'
    );
  });
});