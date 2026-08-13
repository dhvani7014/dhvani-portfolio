import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhvani Dave · Cloud Software Engineer",
  description:
    "Portfolio of Dhvani Dave — Cloud Software Engineer specializing in full-stack systems, distributed backends, and applied AI/ML.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-bg text-text font-body">{children}</body>
    </html>
  );
}
