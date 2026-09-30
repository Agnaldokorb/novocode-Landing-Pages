import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactSection from '@components/ContactSection';

describe('<ContactSection />', () => {
  it('renders the contact heading and form', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /conte sua ideia em 2 minutos/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /falar pelo whatsapp/i })).toBeInTheDocument();
  });
});