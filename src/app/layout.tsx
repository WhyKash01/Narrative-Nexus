'use client'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import {RecoilRoot} from 'recoil';
import { Providers } from "./Providers";
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
            <Providers>
            {children}
            </Providers>
            </RecoilRoot>
          </ThemeProvider></body>
    </html>
  );
}
