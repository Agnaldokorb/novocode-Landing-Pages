import { Search, PenTool, Rocket, LifeBuoy } from 'lucide-react';

export const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Conversa inicial para entender seu negócio, público, objetivo do site e referências. Saímos da reunião com um briefing claro.',
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Design + protótipo',
    description:
      'Construímos o layout no Figma, validamos a hierarquia visual e ajustamos a copy para comunicar seu valor.',
  },
  {
    id: 3,
    icon: Rocket,
    title: 'Desenvolvimento',
    description:
      'Codificamos com React, otimizamos para SEO e acessibilidade, e preparamos tudo para publicação.',
  },
  {
    id: 4,
    icon: LifeBuoy,
    title: 'Entrega e publicação',
    description:
      'Subimos no ar (em hospedagem de sua escolha), você revisa e — só então — decide o valor justo a nos pagar.',
  },
];

export const benefits = [
  {
    id: 'preco-justo',
    icon: 'Heart',
    title: 'Você decide o valor',
    description:
      'Avaliamos o resultado entregue. Sem tabela fixa, sem pressão. Você paga o que fizer sentido.',
  },
  {
    id: 'sem-mensalidade',
    icon: 'CreditCard',
    title: 'Sem mensalidade',
    description:
      'Pagamento único na entrega. Sem assinaturas, sem letras miúdas.',
  },
  {
    id: 'dev-senior',
    icon: 'Code2',
    title: 'Devs seniores',
    description:
      'Código limpo, performance alta e SEO técnico desde o primeiro commit.',
  },
  {
    id: 'suporte-real',
    icon: 'MessageCircle',
    title: 'Suporte humano',
    description:
      'Atendimento direto pelo WhatsApp com quem está construindo seu projeto.',
  },
  {
    id: 'transparencia',
    icon: 'ShieldCheck',
    title: 'Transparência total',
    description:
      'Hospedagem e domínio ficam por sua conta — indicamos parceiros, mas nada é surpresa na fatura.',
  },
  {
    id: 'revisoes',
    icon: 'RefreshCw',
    title: '2 rodadas de revisão',
    description:
      'Você tem direito a duas rodadas de ajustes para garantir que ficou do seu jeito.',
  },
];