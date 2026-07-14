import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Amaan",
  description: "Blog posts by Amaan",
};

export default function OntologyTextToSqlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
