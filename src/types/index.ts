export interface Language {
  id: string;
  name: string;
  flag: string;
}

export interface Lesson {
  id: string;
  languageId: string;
  title: string;
  description: string;
  level: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'translation' | 'match';
  question: string;
  correctAnswer: string;
  options?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  streak: number;
  xp: number;
  languages: UserLanguage[];
}

export interface UserLanguage {
  languageId: string;
  progress: number;
  level: number;
  lessonsCompleted: string[];
}
