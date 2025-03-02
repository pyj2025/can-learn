import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'basics-1',
    languageId: 'es',
    title: '기초 1',
    description: '간단한 인사와 소개',
    level: 1,
    exercises: [
      {
        id: 'ex-1',
        type: 'multiple-choice',
        question: '"안녕하세요"는 스페인어로 무엇인가요?',
        correctAnswer: 'Hola',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
      },
      {
        id: 'ex-2',
        type: 'translation',
        question: '"Me llamo Juan"를 한국어로 번역하세요.',
        correctAnswer: '내 이름은 후안이야.',
      },
    ],
  },
  {
    id: 'basics-2',
    languageId: 'es',
    title: '기초 2',
    description: '음식과 음료 관련 표현',
    level: 1,
    exercises: [
      {
        id: 'ex-1',
        type: 'multiple-choice',
        question: '"물"은 스페인어로 무엇인가요?',
        correctAnswer: 'agua',
        options: ['agua', 'pan', 'vino', 'cerveza'],
      },
    ],
  },
];
