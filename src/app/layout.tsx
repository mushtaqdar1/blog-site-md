import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Education Hub:Mushtaq Ahmad Dar',
  description: 'For Students of Government College of Engineering and Technology, Safapora, Kashmir',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen p-4 gap-16 container font-[family-name:var(--font-geist-sans)] mx-auto">
            {children}
          </main>
          <footer className="text-center p-4">
            <p>
              © {new Date().getFullYear()} Mushtaq Ahmad Dar. All rights
              reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
