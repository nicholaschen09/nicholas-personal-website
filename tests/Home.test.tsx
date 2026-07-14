import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the title from site.md', () => {
    render(<Home />);
    expect(screen.getByText('hi, im Amaan')).toBeInTheDocument();
  });

  it('renders the currently section label', () => {
    render(<Home />);
    expect(screen.getByText('currently')).toBeInTheDocument();
  });

  it('renders blogs grouped by tech and life with short list titles', () => {
    render(<Home />);
    expect(screen.getByText('tech')).toBeInTheDocument();
    expect(screen.getByText('life')).toBeInTheDocument();
    expect(screen.getByText('git troubles')).toBeInTheDocument();
    expect(screen.getByText('life lately')).toBeInTheDocument();
    expect(screen.queryByText('Saving you from your Git troubles')).not.toBeInTheDocument();
  });
});
