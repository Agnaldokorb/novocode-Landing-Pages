import { buildMessage } from './messageBuilder';

export class EmailStrategy {
  constructor({ email }) {
    this.email = email;
  }

  async send(data) {
    if (!this.email) {
      throw new Error('E-mail de destino não configurado.');
    }
    const subject = `Novo contato — ${data.name}`;
    const body = buildMessage(data).replace(/\*/g, '');
    const url = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
    return { ok: true, channel: 'email', url };
  }
}