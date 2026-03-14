import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';
import { ReactNode } from 'react';

// Wrapper for the context
const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('Home Page', () => {
  it('renders the greeting', () => {
    render(<Home />, { wrapper });
    // Check for the English greeting (default)
    expect(screen.getByText((content) => content.includes('hi im nic'))).toBeInTheDocument();
  });

  it('renders the current role', () => {
    render(<Home />, { wrapper });
    // This key "hero.currently" translates to "currently" in English
    expect(screen.getByText('currently')).toBeInTheDocument();
  });
});
