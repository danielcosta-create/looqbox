import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/theme/antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Looqbox -  Insights por IA à velocidade da luz",
  description:
    "Looqbox oferece insights rápidos e precisos utilizando inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} antialiased`}>
        <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
