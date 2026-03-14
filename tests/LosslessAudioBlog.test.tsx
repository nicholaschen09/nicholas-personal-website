import { render, screen } from '@testing-library/react';
import LosslessBlog from '../app/blogs/lossless-audio/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';
import { ReactNode } from 'react';

// Wrapper for the context
const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('Lossless Audio Blog Page', () => {
  it('renders title', () => {
    render(<LosslessBlog />, { wrapper });
    expect(screen.getByText('how lossless compression preserves audio quality')).toBeInTheDocument();
  });

  it('renders back link', () => {
    render(<LosslessBlog />, { wrapper });
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
