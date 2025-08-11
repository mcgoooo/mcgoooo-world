import type { Metadata } from "next";
import { Major_Mono_Display } from "next/font/google";
import "./globals.css";


const majorMonoDisplay = Major_Mono_Display({
  weight: '400', // only one weight available for this font
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
      <body className={`${majorMonoDisplay.className}`}>
        {children}
      </body>
    </html>
  );
}
