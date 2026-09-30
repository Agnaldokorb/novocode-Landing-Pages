import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from '@components/Timeline';
import { Search, Rocket } from 'lucide-react';

describe('<Timeline />', () => {
  const steps = [
    { id: 1, icon: Search, title: 'Diagnóstico', description: 'Conversa de briefing.' },
    { id: 2, icon: Rocket, title: 'Entrega', description: 'Subimos no ar.' },
  ];

  it('renders each step title and description', () => {
    render(<Timeline steps={steps} />);
    expect(screen.getByText('Diagnóstico')).toBeInTheDocument();
    expect(screen.getByText('Conversa de briefing.')).toBeInTheDocument();
    expect(screen.getByText('Entrega')).toBeInTheDocument();
    expect(screen.getByText('Subimos no ar.')).toBeInTheDocument();
  });

  it('renders an ordered list', () => {
    const { container } = render(<Timeline steps={steps} />);
    expect(container.querySelector('ol')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});