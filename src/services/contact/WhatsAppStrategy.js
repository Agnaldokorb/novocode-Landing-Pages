import { buildMessage } from './messageBuilder';

export class WhatsAppStrategy {
  constructor({ phoneNumber }) {
    this.phoneNumber = phoneNumber;
  }

  async send(data) {
    if (!this.phoneNumber) {
      throw new Error('Número de WhatsApp não configurado.');
    }
    const message = buildMessage(data);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    return { ok: true, channel: 'whatsapp', url };
  }
}