import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Taufa Bazar - Your One-Stop Ecommerce Destination",
  description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home & garden, and more at Taufa Bazar.",
  keywords: "ecommerce, online shopping, electronics, fashion, home & garden, taufa bazar",
  authors: [{ name: "Taufa Bazar" }],
  openGraph: {
    title: "Taufa Bazar - Your One-Stop Ecommerce Destination",
    description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home & garden, and more at Taufa Bazar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
