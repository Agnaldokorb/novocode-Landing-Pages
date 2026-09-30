import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@contexts/ThemeProvider';
import Header from '@components/Header';

vi.mock('@hooks/useScrollReveal', () => ({
  useScrollReveal: () => [null, true],
}));

const renderHeader = () =>
  render(
    <ThemeProvider defaultTheme="light">
      <Header />
    </ThemeProvider>
  );

describe('<Header />', () => {
  it('renders logo and navigation links', () => {
    renderHeader();
    expect(screen.getByLabelText(/novocode — página inicial/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /serviços/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /como funciona/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument();
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();
    renderHeader();
    const menuButton = screen.getByRole('button', { name: /abrir menu/i });
    await user.click(menuButton);
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /fechar menu/i }));
    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument();
  });
});