'use client'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import {RecoilRoot} from 'recoil';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <RecoilRoot>
            {children}
            </RecoilRoot>
          </ThemeProvider></body>
    </html>
  );
}
