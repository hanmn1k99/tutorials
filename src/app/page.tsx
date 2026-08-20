import Link from 'next/link';
import content from '../data/content.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <header className="bg-white shadow-sm sticky top-0 z-10 px-6 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
            AAS Academy
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full border border-blue-200">v2.0</span>
          </h1>
        </div>
        <div className="text-sm font-medium text-gray-500">Hệ thống Đào tạo Nội bộ</div>
      </header>

      <div className="max-w-6xl mx-auto p-8 pt-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Chương trình Hướng dẫn & Đào tạo</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Lựa chọn các khóa học bên dưới để xem kịch bản video hướng dẫn chi tiết được thiết kế dành riêng cho bạn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.courses.map((course) => (
            <Link 
              href={`/course/${course.id}`} 
              key={course.id}
              className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Mới cập nhật
              </div>
              <div className="h-40 rounded-xl mb-5 flex items-center justify-center text-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-50">
                <svg className="w-12 h-12 opacity-60 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{course.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{course.description}</p>
              
              <div className="mt-5 flex items-center text-blue-600 font-semibold text-sm">
                Vào bài học 
                <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
