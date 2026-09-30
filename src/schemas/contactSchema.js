import { z } from 'zod';

export const projectTypeEnum = z.enum(['landing-page', 'site-institucional', 'outro']);

const phoneRegex = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Informe seu nome completo (mínimo 3 caracteres).')
    .max(80, 'Nome muito longo.'),
  email: z
    .string()
    .min(1, 'Informe seu e-mail.')
    .email('E-mail inválido.'),
  phone: z
    .string()
    .min(1, 'Informe seu telefone.')
    .regex(phoneRegex, 'Telefone inválido. Use o formato (11) 91234-5678.'),
  projectType: projectTypeEnum,
  message: z
    .string()
    .min(20, 'Conte um pouco mais sobre o projeto (mínimo 20 caracteres).')
    .max(1000, 'Mensagem muito longa (máximo 1000 caracteres).'),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os termos.' }),
  }),
});

export const defaultContactValues = {
  name: '',
  email: '',
  phone: '',
  projectType: 'landing-page',
  message: '',
  acceptTerms: false,
};