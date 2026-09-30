import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@components/ContactForm';
import { createContactService } from '@services/contact/ContactService';

/**
 * Feature: Envio do formulário de contato
 *   Como visitante interessado em um projeto
 *   Quero enviar meus dados pelo formulário
 *   Para que a NovoCode entre em contato comigo.
 */
describe('Feature: Envio do formulário de contato', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.restoreAllMocks();
  });

  it('Scenario: Usuário preenche o formulário com dados válidos', async () => {
    // Given que estou na página de contato
    const sendSpy = vi.fn().mockResolvedValue({ ok: true, channel: 'whatsapp' });
    const service = createContactService({ strategy: 'whatsapp' });
    service.send = sendSpy;

    vi.doMock('@hooks/useContactForm', () => ({
      useContactForm: () => ({ submit: sendSpy }),
    }));

    render(<ContactForm />);
    const user = userEvent.setup();

    // When preencho todos os campos corretamente
    await user.type(screen.getByLabelText(/nome completo/i), 'Maria Silva');
    await user.type(screen.getByLabelText(/e-mail/i), 'maria@exemplo.com');
    await user.type(screen.getByLabelText(/telefone/i), '11912345678');
    await user.type(
      screen.getByLabelText(/conte sobre o projeto/i),
      'Quero uma landing page para divulgar meu curso online de fotografia.'
    );
    await user.click(screen.getByLabelText(/estou de acordo/i));

    // And envio o formulário
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    // Then vejo a confirmação de sucesso
    await waitFor(() => {
      expect(screen.getByText(/pronto/i)).toBeInTheDocument();
    });
  });

  it('Scenario: Usuário tenta enviar com campos obrigatórios vazios', async () => {
    // Given que estou na página de contato
    render(<ContactForm />);
    const user = userEvent.setup();

    // When clico em enviar sem preencher nada
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    // Then vejo mensagens de erro para cada campo obrigatório
    const alerts = await screen.findAllByRole('alert');
    expect(alerts.length).toBeGreaterThan(0);
  });

  it('Scenario: Usuário informa telefone em formato inválido', async () => {
    // Given que estou na página de contato
    render(<ContactForm />);
    const user = userEvent.setup();

    // When preencho o telefone incorretamente
    await user.type(screen.getByLabelText(/telefone/i), '123');
    await user.tab();

    // Then vejo uma mensagem de erro específica
    expect(await screen.findByText(/telefone inválido/i)).toBeInTheDocument();
  });

  it('Scenario: A estratégia padrão abre o WhatsApp com mensagem formatada', async () => {
    // Given que a estratégia configurada é WhatsApp
    const service = createContactService({
      strategy: 'whatsapp',
      phoneNumber: '5511999999999',
    });

    // When envio os dados do formulário
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    await service.send({
      name: 'João da Silva',
      email: 'joao@exemplo.com',
      phone: '(11) 91234-5678',
      projectType: 'landing-page',
      message: 'Preciso de uma landing page para minha empresa.',
      acceptTerms: true,
    });

    // Then a janela do WhatsApp é aberta com os dados formatados
    expect(openSpy).toHaveBeenCalledTimes(1);
    const url = openSpy.mock.calls[0][0];
    expect(url).toMatch(/^https:\/\/wa\.me\/5511999999999\?text=/);
    expect(decodeURIComponent(url)).toContain('João da Silva');
    expect(decodeURIComponent(url)).toContain('Landing Page');
    openSpy.mockRestore();
  });
});