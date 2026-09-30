import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from '@components/Section';

describe('<Section />', () => {
  it('renders title and subtitle', () => {
    render(
      <Section id="x" eyebrow="Eyebrow" title="Título" subtitle="Subtítulo descrição">
        <p>conteúdo</p>
      </Section>
    );
    expect(screen.getByText('Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Subtítulo descrição')).toBeInTheDocument();
    expect(screen.getByText('conteúdo')).toBeInTheDocument();
  });

  it('renders without header when no title is provided', () => {
    const { container } = render(
      <Section>
        <p>só conteúdo</p>
      </Section>
    );
    expect(screen.getByText('só conteúdo')).toBeInTheDocument();
    expect(container.querySelector('header')).toBeNull();
  });

  it('applies background and align classes', () => {
    const { container } = render(
      <Section background="secondary" align="left">
        <p>x</p>
      </Section>
    );
    const section = container.querySelector('section');
    expect(section.className).toMatch(/bg-secondary/);
    expect(section.className).toMatch(/align-left/);
  });
});