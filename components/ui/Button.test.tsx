import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders a link with the correct href', () => {
    render(<Button href="/test-link">Click me</Button>);
    
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test-link');
  });

  it('applies primary variant classes by default', () => {
    render(<Button href="/primary">Primary Button</Button>);
    
    const link = screen.getByRole('link', { name: /primary button/i });
    expect(link).toHaveClass('bg-primary');
    expect(link).toHaveClass('text-white');
  });

  it('applies secondary variant classes when specified', () => {
    render(<Button href="/secondary" variant="secondary">Secondary Button</Button>);
    
    const link = screen.getByRole('link', { name: /secondary button/i });
    expect(link).toHaveClass('bg-secondary');
    expect(link).toHaveClass('text-white');
  });

  it('applies outline variant classes when specified', () => {
    render(<Button href="/outline" variant="outline">Outline Button</Button>);
    
    const link = screen.getByRole('link', { name: /outline button/i });
    expect(link).toHaveClass('border-2');
    expect(link).toHaveClass('border-primary');
    expect(link).toHaveClass('text-primary');
  });

  it('applies custom className', () => {
    render(<Button href="/custom" className="custom-class">Custom Button</Button>);
    
    const link = screen.getByRole('link', { name: /custom button/i });
    expect(link).toHaveClass('custom-class');
  });
});
