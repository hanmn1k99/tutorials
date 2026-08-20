import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hệ Thống Đào Tạo AAS - Video Platform',
  description: 'Nền tảng học tập và hướng dẫn nội bộ chuyên nghiệp',
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
