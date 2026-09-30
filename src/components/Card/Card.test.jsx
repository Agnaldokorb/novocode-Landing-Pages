import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Zap } from 'lucide-react';
import Card from '@components/Card';

describe('<Card />', () => {
  it('renders icon, title and description', () => {
    render(
      <Card icon={Zap} title="Título do card" description="Descrição detalhada." />
    );
    expect(screen.getByText('Título do card')).toBeInTheDocument();
    expect(screen.getByText('Descrição detalhada.')).toBeInTheDocument();
  });

  it('renders the highlights list', () => {
    render(
      <Card
        icon={Zap}
        title="Com destaques"
        description="x"
        highlights={['Item 1', 'Item 2']}
      />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <Card title="Com filhos" description="x">
        <button>ação</button>
      </Card>
    );
    expect(screen.getByRole('button', { name: /ação/i })).toBeInTheDocument();
  });

  it('works without icon', () => {
    render(<Card title="Sem ícone" description="x" />);
    expect(screen.getByText('Sem ícone')).toBeInTheDocument();
  });
});