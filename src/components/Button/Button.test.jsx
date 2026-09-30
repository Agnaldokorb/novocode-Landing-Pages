import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('<Button />', () => {
  it('renders children correctly', () => {
    render(<Button>Quero meu site</Button>);
    expect(screen.getByRole('button', { name: /quero meu site/i })).toBeInTheDocument();
  });

  it('applies variant and size classes', () => {
    render(
      <Button variant="outline" size="lg" data-testid="btn">
        CTA
      </Button>
    );
    const btn = screen.getByTestId('btn');
    expect(btn.className).toMatch(/outline/);
    expect(btn.className).toMatch(/lg/);
  });

  it('fires onClick when clicked', async () => {
    const user = userEvent.setup();
    let clicked = 0;
    render(<Button onClick={() => clicked++}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(clicked).toBe(1);
  });

  it('renders icons when provided', () => {
    render(
      <Button iconLeft={<span data-testid="left" />} iconRight={<span data-testid="right" />}>
        Com ícones
      </Button>
    );
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup();
    let clicked = 0;
    render(
      <Button disabled onClick={() => clicked++}>
        Disabled
      </Button>
    );
    await user.click(screen.getByRole('button'));
    expect(clicked).toBe(0);
  });

  it('uses fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Full</Button>);
    expect(screen.getByRole('button').className).toMatch(/fullWidth/);
  });
});