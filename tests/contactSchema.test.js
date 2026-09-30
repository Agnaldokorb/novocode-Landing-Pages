import { describe, it, expect } from 'vitest';
import { contactSchema } from '../src/schemas/contactSchema';

describe('contactSchema', () => {
  const valid = {
    name: 'João da Silva',
    email: 'joao@exemplo.com',
    phone: '(11) 91234-5678',
    projectType: 'landing-page',
    message: 'Preciso de uma landing page para minha empresa.',
    acceptTerms: true,
  };

  it('accepts a valid payload', () => {
    expect(() => contactSchema.parse(valid)).not.toThrow();
  });

  it('rejects short name', () => {
    const result = contactSchema.safeParse({ ...valid, name: 'ab' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ ...valid, email: 'not-an-email' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid phone', () => {
    const result = contactSchema.safeParse({ ...valid, phone: '123' });
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const result = contactSchema.safeParse({ ...valid, message: 'curto' });
    expect(result.success).toBe(false);
  });

  it('rejects when terms are not accepted', () => {
    const result = contactSchema.safeParse({ ...valid, acceptTerms: false });
    expect(result.success).toBe(false);
  });

  it('rejects unknown project type', () => {
    const result = contactSchema.safeParse({ ...valid, projectType: 'unknown' });
    expect(result.success).toBe(false);
  });
});