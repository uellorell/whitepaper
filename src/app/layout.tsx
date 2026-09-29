import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Understanding Gen Z | Research & Analytics KG Media",
  description:
    "Beyond the Stereotypes: Understanding Gen Z. Satu report yang menyatukan temuan dari empat studi tentang Gen Z Indonesia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
