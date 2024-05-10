import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const inter = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lucky Roulette",
  description: "Roulette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
