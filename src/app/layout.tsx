import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";


const sono = Sono({
  weight: ['300', '400', '500'], // choose the weights you need
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Mcgooo world",
  description: "Mcgoooo world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim" className="bg-mcgoo-orange-to-purple">
      <body className={`${sono.className}`}>
        {children}
      </body>
    </html>
  );
}
