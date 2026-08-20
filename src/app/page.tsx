import { redirect } from 'next/navigation';
import content from '../data/content.json';

export default function Home() {
  // Chuyển hướng người dùng đến bài học đầu tiên ngay khi vào trang chủ
  const firstLessonId = content.modules[0].lessons[0].id;
  redirect(`/lesson/${firstLessonId}`);
}
