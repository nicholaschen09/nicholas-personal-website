import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogPostView from '../components/BlogPostView';
import { LanguageProvider } from '../contexts/LanguageContext';

function renderBlogPost() {
  return render(
    <LanguageProvider>
      <BlogPostView
        title="Saving you from your Git troubles"
        date="2026-02-25"
        author="Amaan Bilwar"
        contentHtml="<p>Git content</p>"
        sections={[{ id: 'merge-conflicts', title: 'Merge Conflicts' }]}
      />
    </LanguageProvider>,
  );
}

describe('Blog post view', () => {
  it('renders the title', () => {
    renderBlogPost();
    expect(screen.getByText('Saving you from your Git troubles')).toBeInTheDocument();
  });

  it('renders the back link', () => {
    renderBlogPost();
    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
