import { Zap, Globe, Smartphone } from 'lucide-react';

export const services = [
  {
    id: 'landing-page',
    icon: Zap,
    title: 'Landing Pages de alta conversão',
    description:
      'Páginas desenhadas para transformar visitantes em leads ou clientes. Copy estratégica, performance e SEO básico prontos.',
    highlights: [
      'Carregamento otimizado',
      'Pixel e analytics configurados',
      'Formulário ou CTA integrado',
      'Responsivo do mobile ao desktop',
    ],
    delivery: '7 dias úteis',
  },
  {
    id: 'site-institucional',
    icon: Globe,
    title: 'Sites institucionais completos',
    description:
      'Presença digital sólida para sua empresa contar sua história, mostrar serviços e gerar oportunidades 24 horas por dia.',
    highlights: [
      'Múltiplas seções e páginas',
      'SEO técnico on-page',
      'Acessibilidade WCAG',
      'Painel para você editar textos',
    ],
    delivery: '15 a 20 dias úteis',
  },
  {
    id: 'mobile-first',
    icon: Smartphone,
    title: 'Mobile-first por padrão',
    description:
      'Projetados a partir do mobile. Cada detalhe é testado em telas pequenas para garantir uma experiência impecável.',
    highlights: [
      'Testado em devices reais',
      'Touch targets ≥ 44px',
      'Imagens otimizadas',
      'Lighthouse ≥ 90',
    ],
    delivery: 'Incluído em todo projeto',
  },
];