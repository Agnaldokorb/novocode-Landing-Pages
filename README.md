# NovoCode — Landing Page

Landing page premium da **NovoCode Tecnologia** divulgando o serviço de criação de
landing pages e sites institucionais com o modelo **"Pague quanto achar justo"**.

> Stack: React 18 + Vite 5, JavaScript ES6+, CSS Modules, framer-motion,
> React Hook Form + Zod, Vitest + Testing Library.

---

## ✨ Destaques de Engenharia

- **SOLID** aplicado em componentes, hooks e serviços.
- **Design Patterns**: Provider, Strategy, Factory, Observer, Facade, Module.
- **Tema claro/escuro** sem FOUC (inicializado no `<head>` antes do React montar),
  com persistência em `localStorage` e transição suave de 200 ms.
- **Logo adaptativa** ao tema via `<Logo />`.
- **Formulário** validado com Zod + React Hook Form e envio via Strategy
  (`WhatsAppStrategy`, `EmailStrategy`, `ApiStrategy`).
- **TDD + BDD**: testes unitários por componente + features em
  `Given/When/Then` em `src/tests/features/`.
- **Acessibilidade**: navegação por teclado, `aria-*`, `prefers-reduced-motion`,
  sem `!important` no CSS, foco visível.

---

## 🚀 Setup

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env

# 3. Rodar em desenvolvimento
npm run dev
# http://localhost:5173

# 4. Build de produção
npm run build
npm run preview
```

### Variáveis de ambiente (`.env`)

```env
# Estratégia de envio do formulário: whatsapp | email | api
VITE_CONTACT_STRATEGY=whatsapp

# Número do WhatsApp (somente dígitos, com DDI)
VITE_WHATSAPP_NUMBER=5511999999999

# API (caso VITE_CONTACT_STRATEGY=api)
VITE_CONTACT_API_URL=https://api.example.com/contact

# E-mail de destino (caso VITE_CONTACT_STRATEGY=email)
VITE_CONTACT_EMAIL=contato@novocode.com.br
```

> **Importante:** hospedagem e domínio **não estão inclusos** no serviço.
> Esta informação está explícita na home, no FAQ e no rodapé.

---

## 📜 Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Gera o bundle de produção em `dist/` |
| `npm run preview` | Serve o build localmente para verificação |
| `npm run test` | Executa todos os testes (Vitest) |
| `npm run test:watch` | Modo watch dos testes |
| `npm run test:coverage` | Gera relatório de cobertura |
| `npm run test:bdd` | Roda apenas as features BDD |

---

## 🗂 Estrutura de pastas

```
src/
├── main.jsx, App.jsx
├── styles/        tokens.css · reset.css · global.css
├── contexts/      ThemeContext (Provider)
├── hooks/         useTheme · useContactForm · useScrollReveal
├── components/
│   ├── Accordion/      (componente + .module.css + testes)
│   ├── Benefits/
│   ├── Button/
│   ├── Card/
│   ├── ContactForm/
│   ├── ContactSection/
│   ├── FAQ/
│   ├── Features/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── HowItWorks/
│   ├── Logo/
│   ├── PricingNote/
│   ├── Section/
│   ├── Timeline/
│   └── ThemeToggle/
├── services/contact/
│   ├── ContactService.js      (Facade + Strategy)
│   ├── WhatsAppStrategy.js
│   ├── EmailStrategy.js
│   ├── ApiStrategy.js
│   └── messageBuilder.js
├── schemas/       contactSchema.js (Zod)
├── data/          services.js · process.js · faqs.js · company.js
└── tests/
    ├── setup.js
    └── features/  theme.feature.test.jsx · contact.feature.test.jsx
```

---

## 🎨 Logo

Há duas variações da logo em `public/assets/`:

- `logo-novocode_preto.svg` → tema claro
- `logo-novocode-branco.svg` → tema escuro

O componente `<Logo />` detecta o tema via `useTheme()` e troca o `src`
automaticamente. Se você substituir por PNGs, renomeie para:

```
public/assets/logo-novocode_preto.png
public/assets/logo-novocode-branco.png
```

…e atualize o array `src` em `src/components/Logo/Logo.jsx`.

---

## 🧪 Testes

- **61 testes** passando em 21 arquivos.
- Cobertura atual: **~90%** (statements).
- BDD em `src/tests/features/` no formato Given/When/Then:

  - `theme.feature.test.jsx` — troca de tema + adaptação da logo
  - `contact.feature.test.jsx` — envio do formulário via WhatsApp

```bash
npm run test           # roda tudo
npm run test:coverage  # com cobertura
npm run test:bdd       # só features BDD
```

---

## 🛠 Princípios aplicados

- **Single Responsibility** — cada componente/hook cuida de uma coisa só.
- **Open/Closed** — Strategy Pattern: novas estratégias sem alterar o componente.
- **Liskov** — `ContactService` aceita qualquer `IStrategy`.
- **Interface Segregation** — `useContactForm` expõe apenas `submit`.
- **Dependency Inversion** — componentes dependem de abstrações
  (`useContactForm`, `useTheme`), nunca de `fetch`/implementações concretas.

---

## 📦 Build

```
dist/
├── index.html
└── assets/
    ├── index-*.css
    ├── index-*.js
    ├── react-*.js       (vendor: react/react-dom)
    ├── motion-*.js      (vendor: framer-motion)
    ├── icons-*.js       (vendor: lucide-react)
    └── form-*.js        (vendor: RHF + Zod)
```

Bundle principal: ~35 kB gzipped + vendors sob demanda via lazy chunks.

---

## ♿ Acessibilidade

- Skip-link implícito via landmark `<main>`.
- Contraste de cores validado para AA em ambos os temas.
- `prefers-reduced-motion` desativa animações e transições.
- Navegação completa por teclado (Tab, Shift+Tab, Enter, Espaço).
- Toggle de tema com `aria-pressed` e label descritivo.

---

## 📝 Licença

© NovoCode Tecnologia. Todos os direitos reservados.