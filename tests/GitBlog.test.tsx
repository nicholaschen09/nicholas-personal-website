import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogPostView from "../components/BlogPostView";

function renderBlogPost() {
  return render(
    <BlogPostView
      title="Saving you from your Git troubles"
      date="2026-02-25"
      author="Amaan"
      readingMinutes={4}
      contentHtml="<p>Git content</p>"
      sections={[{ id: "merge-conflicts", title: "Merge Conflicts" }]}
      backLabel="back"
      contentsLabel="contents"
    />,
  );
}

describe("Blog post view", () => {
  it("renders the title", () => {
    renderBlogPost();
    expect(screen.getByText("Saving you from your Git troubles")).toBeInTheDocument();
  });

  it("renders the back link", () => {
    renderBlogPost();
    expect(screen.getByText("back")).toBeInTheDocument();
  });

  it("renders reading time next to the date", () => {
    renderBlogPost();
    expect(screen.getByText(/4 min read/)).toBeInTheDocument();
  });
});
