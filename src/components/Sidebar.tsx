'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '../data/content.json';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-50 border-r overflow-y-auto hidden md:block fixed left-0 top-0">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Videobook</h1>
      </div>
      <nav className="p-4">
        {content.modules.map((module) => (
          <div key={module.id} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {module.title}
            </h2>
            <ul className="space-y-2">
              {module.lessons.map((lesson) => {
                const isActive = pathname === `/lesson/${lesson.id}`;
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/lesson/${lesson.id}`}
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
