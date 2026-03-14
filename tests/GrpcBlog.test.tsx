import { render, screen } from '@testing-library/react';
import GrpcBlog from '../app/blogs/grpc/page';
import { LanguageProvider } from '../contexts/LanguageContext';
import { describe, it, expect } from 'vitest';
import { ReactNode } from 'react';

// Wrapper for the context
const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('gRPC Blog Page', () => {
  it('renders title', () => {
    render(<GrpcBlog />, { wrapper });
    expect(screen.getByText('what makes gRPC so good')).toBeInTheDocument();
  });

  it('renders back link', () => {
    render(<GrpcBlog />, { wrapper });
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
