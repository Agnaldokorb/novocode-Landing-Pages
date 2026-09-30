import { buildMessage } from './messageBuilder';

export class ApiStrategy {
  constructor({ endpoint }) {
    this.endpoint = endpoint;
  }

  async send(data) {
    if (!this.endpoint) {
      throw new Error('Endpoint da API não configurado.');
    }
    const payload = {
      ...data,
      message: buildMessage(data),
    };
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error('Falha ao enviar contato via API.');
    }
    return { ok: true, channel: 'api' };
  }
}