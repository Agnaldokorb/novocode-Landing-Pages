import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@contexts/ThemeProvider';
import Footer from '@components/Footer';

describe('<Footer />', () => {
  it('renders logo, navigation, contact and social links', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <Footer />
      </ThemeProvider>
    );
    expect(screen.getByAltText(/novocode/i)).toBeInTheDocument();
    expect(screen.getByText(/navegação/i)).toBeInTheDocument();
    expect(screen.getAllByText(/contato/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/^redes$/i)).toBeInTheDocument();
    expect(screen.getByText(/hospedagem e domínio não inclusos/i)).toBeInTheDocument();
  });

  it('renders the copyright year', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <Footer />
      </ThemeProvider>
    );
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });
});