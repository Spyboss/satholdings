import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

// Mock next/link since it's used in Navbar
vi.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children, href, onClick, className, ...props }: any) => {
      return (
        <a href={href} onClick={onClick} className={className} {...props}>
          {children}
        </a>
      );
    },
  };
});

describe('Navbar', () => {
  it('renders company name', () => {
    render(<Navbar />);
    // The company name in Navbar replaces " Pvt Ltd" with empty string
    const expectedName = COMPANY.name.replace(" Pvt Ltd", "");
    expect(screen.getByText(expectedName)).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    
    NAV_LINKS.forEach(link => {
      // Look for links that are likely visible on desktop. 
      // Note: Mobile links are hidden by default, so queryAllByText might return 1 or 2 depending on if mobile menu is in DOM but hidden with CSS
      // Since we are using JSDOM, CSS classes like 'hidden md:flex' don't actually hide elements from getByText unless we check visibility.
      // However, the mobile menu is conditionally rendered {isOpen && ...}, so it shouldn't be in the DOM initially.
      // But the desktop links are always there.
      const elements = screen.queryAllByText(link.label);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />);
    
    // Mobile menu should not be in the document initially
    const mobileMenuButton = screen.getByLabelText(/open menu/i);
    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(mobileMenuButton);
    
    // Now close icon should be visible (aria-label changes)
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
    
    // Check if a link from mobile menu is present and visible
    // Since we mocked Link, we can just check for text again.
    // The structure shows mobile menu is rendered when isOpen is true.
    const mobileLinks = screen.getAllByText('Home');
    // One for desktop (always there), one for mobile (now rendered)
    expect(mobileLinks).toHaveLength(2);

    // Click to close
    fireEvent.click(screen.getByLabelText(/close menu/i));
    
    // Should be closed again
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
  });
});
