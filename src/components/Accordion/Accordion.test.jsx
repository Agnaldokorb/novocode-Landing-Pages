import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '@components/Accordion';

describe('<Accordion />', () => {
  const items = [
    { id: 'a', question: 'Pergunta A?', answer: 'Resposta A.' },
    { id: 'b', question: 'Pergunta B?', answer: 'Resposta B.' },
  ];

  const getPanel = (id) => document.getElementById(`${id}-panel`);

  it('opens the first item by default when defaultOpenId is omitted', () => {
    render(<Accordion items={items} />);
    expect(getPanel('a').hasAttribute('hidden')).toBe(false);
  });

  it('toggles items when triggered', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultOpenId={null} />);
    await user.click(screen.getByRole('button', { name: /pergunta a/i }));
    expect(getPanel('a').hasAttribute('hidden')).toBe(false);
    await user.click(screen.getByRole('button', { name: /pergunta a/i }));
    expect(getPanel('a').hasAttribute('hidden')).toBe(true);
  });

  it('closes previously open item when another is opened', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole('button', { name: /pergunta b/i }));
    expect(getPanel('a').hasAttribute('hidden')).toBe(true);
    expect(getPanel('b').hasAttribute('hidden')).toBe(false);
  });
});