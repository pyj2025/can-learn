import { useStore } from '../../store/useStore';
import LanguageSelector from '../../components/language-selector';
import LessonCard from '../../components/lesson-card';

export default function LearnPage() {
  const { lessons, currentLanguage, user } = useStore();

  const languageLessons = lessons.filter(
    (lesson) => lesson.languageId === currentLanguage
  );

  const userLanguage = user.languages.find(
    (lang) => lang.languageId === currentLanguage
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <LanguageSelector />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {languageLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            userLanguage={userLanguage}
          />
        ))}
      </div>
    </div>
  );
}
