import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Montserrat} from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "O Mundo das Mocinhas",
    template: "%s | O Mundo das Mocinhas",
  },
  description:
    "Plataforma digital de moda feminina focada em elegância, tendência e confiança. Descubra peças exclusivas e brilhe do seu jeito 💕",
  keywords: [
    "moda feminina",
    "fashion",
    "ecommerce",
    "roupas femininas",
    "tendência",
    "estilo",
    "loja online",
  ],
  authors: [{ name: "Emanuel Malungo" }],
  creator: "Emanuel Malungo",
  metadataBase: new URL("https://mundodasmocinhas.com"),
  openGraph: {
    title: "O Mundo das Mocinhas",
    description:
      "Elegância, tendência e confiança para mulheres modernas.",
    url: "https://mundodasmocinhas.com",
    siteName: "O Mundo das Mocinhas",
    locale: "pt_AO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O Mundo das Mocinhas",
    description:
      "Brilhe do seu jeito 💕 Descubra as últimas tendências da moda feminina.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}