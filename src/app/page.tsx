import Link from 'next/link';
import content from '../data/content.json';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Hệ thống Hướng dẫn Nội bộ</h1>
        <p className="text-gray-600 text-lg">Chọn một chương trình hướng dẫn bên dưới để bắt đầu học.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.courses.map((course) => (
          <Link 
            href={`/course/${course.id}`} 
            key={course.id}
            className="block border rounded-xl p-6 hover:shadow-lg transition-shadow bg-white hover:border-blue-500"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              [Ảnh Minh Họa]
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <div className="mt-4 text-blue-600 font-medium text-sm">
              Bắt đầu học →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
