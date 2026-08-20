import Link from 'next/link';
import { notFound } from 'next/navigation';
import content from '../../../data/content.json';

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Tìm bài học hiện tại và các bài lân cận
  let currentLesson = null;
  let prevLesson = null;
  let nextLesson = null;
  
  const allLessons = content.modules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === id);
  
  if (currentIndex === -1) {
    notFound();
  }
  
  currentLesson = allLessons[currentIndex];
  if (currentIndex > 0) prevLesson = allLessons[currentIndex - 1];
  if (currentIndex < allLessons.length - 1) nextLesson = allLessons[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
        <p className="text-gray-600">{currentLesson.description}</p>
      </div>
      
      {/* Khung chứa Video */}
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-8 shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
          title={currentLesson.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
        ></iframe>
      </div>
      
      {/* Nút điều hướng */}
      <div className="flex justify-between items-center border-t pt-6">
        {prevLesson ? (
          <Link 
            href={`/lesson/${prevLesson.id}`}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← {prevLesson.title}
          </Link>
        ) : <div></div>}
        
        {nextLesson ? (
          <Link 
            href={`/lesson/${nextLesson.id}`}
            className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Tiếp theo: {nextLesson.title} →
          </Link>
        ) : (
          <div className="text-green-600 font-medium">🎉 Bạn đã hoàn thành khóa học!</div>
        )}
      </div>
    </div>
  );
}
