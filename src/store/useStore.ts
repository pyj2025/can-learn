import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Language, Lesson } from '../types';
import { user as initialUser } from '../data/user';
import { languages as initialLanguages } from '../data/languages';
import { lessons as initialLessons } from '../data/lessons';

interface StoreState {
  user: User;
  languages: Language[];
  lessons: Lesson[];
  currentLanguage: string;
  currentLesson: string | null;
  currentExerciseIndex: number;
  setCurrentLanguage: (langId: string) => void;
  setCurrentLesson: (lessonId: string | null) => void;
  completeLesson: (lessonId: string) => void;
  addXp: (amount: number) => void;
  incrementStreak: () => void;
  setCurrentExerciseIndex: (index: number) => void;
  resetExerciseProgress: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      user: initialUser,
      languages: initialLanguages,
      lessons: initialLessons,
      currentLanguage: 'es',
      currentLesson: null,
      currentExerciseIndex: 0,

      setCurrentLanguage: (langId: string) => set({ currentLanguage: langId }),

      setCurrentLesson: (lessonId: string | null) =>
        set({
          currentLesson: lessonId,
          currentExerciseIndex: 0,
        }),

      completeLesson: (lessonId: string) =>
        set((state) => {
          const userLanguage = state.user.languages.find(
            (ul) => ul.languageId === state.currentLanguage
          );

          if (!userLanguage) return state;

          if (userLanguage.lessonsCompleted.includes(lessonId)) {
            return state;
          }

          const updatedUserLanguages = state.user.languages.map((ul) => {
            if (ul.languageId === state.currentLanguage) {
              return {
                ...ul,
                lessonsCompleted: [...ul.lessonsCompleted, lessonId],
                progress: ul.progress + 5,
              };
            }
            return ul;
          });

          return {
            ...state,
            user: {
              ...state.user,
              languages: updatedUserLanguages,
            },
          };
        }),

      addXp: (amount: number) =>
        set((state) => ({
          user: {
            ...state.user,
            xp: state.user.xp + amount,
          },
        })),

      incrementStreak: () =>
        set((state) => ({
          user: {
            ...state.user,
            streak: state.user.streak + 1,
          },
        })),

      setCurrentExerciseIndex: (index: number) =>
        set({ currentExerciseIndex: index }),

      resetExerciseProgress: () => set({ currentExerciseIndex: 0 }),
    }),
    {
      name: 'can-learn-storage',
    }
  )
);
