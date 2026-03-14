import { render, screen } from '@testing-library/react';
import SoftwareEngineeringLearningBlog from '../app/blogs/how-i-learned-to-code/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';
import { ReactNode } from 'react';

// Wrapper for the context
const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('How I Learned to Code Blog Page', () => {
  it('renders the title', () => {
    render(<SoftwareEngineeringLearningBlog />, { wrapper });
    expect(screen.getByText('how i learned to code')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    render(<SoftwareEngineeringLearningBlog />, { wrapper });
    expect(screen.getByText('back')).toBeInTheDocument();
  });

  it('renders learning timeline', () => {
    render(<SoftwareEngineeringLearningBlog />, { wrapper });
    // Check for "2023" which is a year heading in the blog
    // Using getAllByText because it appears in both TOC and main content
    expect(screen.getAllByText('2023').length).toBeGreaterThan(0);
  });
});
