export const projectTypeLabels = {
  'landing-page': 'Landing Page',
  'site-institucional': 'Site Institucional',
  outro: 'Outro',
};

const escapeParam = (value) => encodeURIComponent(String(value ?? ''));

export const buildMessage = (data) => {
  const label = projectTypeLabels[data.projectType] || data.projectType;
  return [
    '*Novo contato via site*',
    '',
    `*Nome:* ${data.name}`,
    `*E-mail:* ${data.email}`,
    `*Telefone:* ${data.phone}`,
    `*Tipo de projeto:* ${label}`,
    '',
    '*Mensagem:*',
    data.message,
  ].join('\n');
};