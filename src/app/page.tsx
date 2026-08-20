import Link from 'next/link';
import content from '../data/content.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F5F7]">
      <header className="bg-white shadow-sm sticky top-0 z-10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">
            V
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Videobook</h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-8 pt-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Trung tâm Hướng dẫn & Đào tạo</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Chọn một chương trình bên dưới để khám phá các kịch bản video hướng dẫn chi tiết từng bước.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.courses.map((course) => (
            <Link 
              href={`/course/${course.id}`} 
              key={course.id}
              className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-44 rounded-xl mb-6 flex items-center justify-center text-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50">
                <svg className="w-12 h-12 opacity-50 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{course.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-2">{course.description}</p>
              
              <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
                Bắt đầu học 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
