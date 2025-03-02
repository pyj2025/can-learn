import Link from 'next/link';
import { Lesson, UserLanguage } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  userLanguage: UserLanguage | undefined;
}

export default function LessonCard({ lesson, userLanguage }: LessonCardProps) {
  const isCompleted = userLanguage?.lessonsCompleted.includes(lesson.id);

  return (
    <Link href={`/learn/${lesson.languageId}/${lesson.id}`}>
      <div
        className={`block p-6 rounded-xl shadow transition-all hover:shadow-md ${
          isCompleted ? 'bg-green-100' : 'bg-white'
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 mb-4">{lesson.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-200">
            레벨 {lesson.level}
          </span>

          {isCompleted && <span className="text-green-500">✓ 완료</span>}
        </div>
      </div>
    </Link>
  );
}
