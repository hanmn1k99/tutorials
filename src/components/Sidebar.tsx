'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import content from '../../content.json';

export default function Sidebar() {
  const pathname = usePathname();
  const params = useParams();
  const courseId = params.courseId as string;

  const course = content.courses.find(c => c.id === courseId);
  
  if (!course) return null;

  return (
    <div className="w-64 h-screen bg-gray-50 border-r overflow-y-auto hidden md:block fixed left-0 top-0">
      <div className="p-4 border-b">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-2 block">← Về trang chủ</Link>
        <h1 className="text-lg font-bold text-gray-800">{course.title}</h1>
      </div>
      <nav className="p-4">
        {course.modules.map((module) => (
          <div key={module.id} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {module.title}
            </h2>
            <ul className="space-y-2">
              {module.lessons.map((lesson) => {
                const isActive = pathname === `/course/${courseId}/lesson/${lesson.id}`;
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/course/${courseId}/lesson/${lesson.id}`}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
