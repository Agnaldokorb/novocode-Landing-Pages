import { WhatsAppStrategy } from './WhatsAppStrategy';
import { EmailStrategy } from './EmailStrategy';
import { ApiStrategy } from './ApiStrategy';

export class ContactService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
    return this;
  }

  async send(data) {
    if (!this.strategy) {
      throw new Error('Nenhuma estratégia de envio configurada.');
    }
    return this.strategy.send(data);
  }
}

export const createContactService = (config = {}) => {
  const strategyType = config.strategy || import.meta.env.VITE_CONTACT_STRATEGY || 'whatsapp';

  let strategy;
  switch (strategyType) {
    case 'email':
      strategy = new EmailStrategy({ email: config.email || import.meta.env.VITE_CONTACT_EMAIL });
      break;
    case 'api':
      strategy = new ApiStrategy({ endpoint: config.apiUrl || import.meta.env.VITE_CONTACT_API_URL });
      break;
    case 'whatsapp':
    default:
      strategy = new WhatsAppStrategy({
        phoneNumber: config.phoneNumber || import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999',
      });
      break;
  }

  return new ContactService(strategy);
};