import { redirect, notFound } from 'next/navigation';
import content from '../../../data/content.json';

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  
  const course = content.courses.find(c => c.id === courseId);
  if (!course || course.modules.length === 0 || course.modules[0].lessons.length === 0) {
    notFound();
  }
  
  // Chuyển hướng đến bài học đầu tiên của khóa học này
  redirect(`/course/${courseId}/lesson/${course.modules[0].lessons[0].id}`);
}
