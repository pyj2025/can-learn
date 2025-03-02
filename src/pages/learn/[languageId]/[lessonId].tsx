import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../../../store/useStore';
import ExerciseCard from '../../../components/exercise-card';
import ProgressBar from '../../../components/progress-bar';

export default function LessonPage() {
  const router = useRouter();
  const { languageId, lessonId } = router.query;

  const {
    lessons,
    currentExerciseIndex,
    setCurrentExerciseIndex,
    completeLesson,
    addXp,
    incrementStreak,
  } = useStore();

  const [mistakes, setMistakes] = useState(0);

  const lesson = lessons.find(
    (l) => l.languageId === languageId && l.id === lessonId
  );

  useEffect(() => {
    if (router.isReady && !lesson) {
      router.push('/learn');
    }
  }, [lesson, router.isReady, router]);

  if (!router.isReady || !lesson) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">로딩 중...</div>
    );
  }

  const currentExercise = lesson.exercises[currentExerciseIndex];

  const handleCorrect = () => {
    if (currentExerciseIndex === lesson.exercises.length - 1) {
      completeLesson(lesson.id as string);
      addXp(10 - mistakes);
      incrementStreak();
      router.push('/learn');
    } else {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handleIncorrect = () => {
    setMistakes(mistakes + 1);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
          <ProgressBar
            value={currentExerciseIndex + 1}
            max={lesson.exercises.length}
          />
        </div>

        <ExerciseCard
          exercise={currentExercise}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      </div>
    </div>
  );
}
