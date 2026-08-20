import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import config from '../../config.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.siteName,
  description: config.headerSubtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#F4F5F7] text-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}
