import { describe, it, expect, vi } from 'vitest';
import { ContactService } from '../src/services/contact/ContactService';
import { WhatsAppStrategy } from '../src/services/contact/WhatsAppStrategy';
import { EmailStrategy } from '../src/services/contact/EmailStrategy';

describe('ContactService', () => {
  it('throws if no strategy is configured', async () => {
    const service = new ContactService(null);
    await expect(service.send({})).rejects.toThrow(/nenhuma estratégia/i);
  });

  it('delegates send to the active strategy', async () => {
    const spy = { send: vi.fn().mockResolvedValue({ ok: true }) };
    const service = new ContactService(spy);
    await service.send({ name: 'João' });
    expect(spy.send).toHaveBeenCalledWith({ name: 'João' });
  });
});

describe('WhatsAppStrategy', () => {
  it('throws when phone number is missing', async () => {
    const strategy = new WhatsAppStrategy({ phoneNumber: '' });
    await expect(strategy.send({})).rejects.toThrow(/número de whatsapp/i);
  });

  it('opens a WhatsApp URL with formatted data', async () => {
    const strategy = new WhatsAppStrategy({ phoneNumber: '5511999999999' });
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    await strategy.send({
      name: 'Maria',
      email: 'maria@x.com',
      phone: '11912345678',
      projectType: 'landing-page',
      message: 'Mensagem com mais de 20 caracteres para validar o envio.',
      acceptTerms: true,
    });
    expect(openSpy).toHaveBeenCalled();
    const url = openSpy.mock.calls[0][0];
    expect(url).toContain('wa.me/5511999999999');
    expect(decodeURIComponent(url)).toContain('Maria');
  });
});

describe('EmailStrategy', () => {
  it('throws when email is missing', async () => {
    const strategy = new EmailStrategy({ email: '' });
    await expect(strategy.send({})).rejects.toThrow(/e-mail de destino/i);
  });

  it('navigates to a mailto URL with body', async () => {
    const strategy = new EmailStrategy({ email: 'contato@novocode.com.br' });
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };
    await strategy.send({
      name: 'João',
      email: 'j@x.com',
      phone: '11912345678',
      projectType: 'site-institucional',
      message: 'Mensagem com mais de 20 caracteres para validar.',
      acceptTerms: true,
    });
    expect(window.location.href).toContain('mailto:contato@novocode.com.br');
    expect(window.location.href).toContain('subject=');
    window.location = originalLocation;
  });
});