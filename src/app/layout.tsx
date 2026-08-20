import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Videobook Tutorials',
  description: 'Hướng dẫn sử dụng qua video',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="flex h-screen bg-white text-black">
          <Sidebar />
          <main className="flex-1 md:ml-64 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
