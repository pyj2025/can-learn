import Image from 'next/image';
import { useStore } from '../../store/useStore';

export default function LearnPage() {
  const { lessons, currentLanguage } = useStore();

  const languageLessons = lessons.filter(
    (lesson) => lesson.languageId === currentLanguage
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {languageLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <Image
              src="/images/image-test.png"
              alt="Lesson image"
              width={600}
              height={600}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold text-center mt-3">
              {lesson.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
