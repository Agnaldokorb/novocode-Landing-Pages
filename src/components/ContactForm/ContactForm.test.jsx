import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

vi.mock('@hooks/useContactForm', () => ({
  useContactForm: () => ({
    submit: vi.fn().mockResolvedValue({ ok: true, channel: 'whatsapp' }),
  }),
}));

describe('<ContactForm />', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders all fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo de projeto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/conte sobre o projeto/i)).toBeInTheDocument();
  });

  it('shows validation errors on submit with empty fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));
    expect(await screen.findAllByRole('alert')).not.toHaveLength(0);
  });

  it('formats phone number as the user types', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const phone = screen.getByLabelText(/telefone/i);
    await user.type(phone, '11912345678');
    expect(phone).toHaveValue('(11) 91234-5678');
  });

  it('submits when form is valid', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/nome completo/i), 'João da Silva');
    await user.type(screen.getByLabelText(/e-mail/i), 'joao@exemplo.com');
    await user.type(screen.getByLabelText(/telefone/i), '11912345678');
    await user.type(
      screen.getByLabelText(/conte sobre o projeto/i),
      'Preciso de uma landing page para minha clínica com agendamento online.'
    );
    await user.click(screen.getByLabelText(/estou de acordo/i));
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    expect(await screen.findByText(/pronto/i)).toBeInTheDocument();
  });
});