import Sidebar from '@/components/Sidebar';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 md:ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
