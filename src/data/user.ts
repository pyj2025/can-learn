import { User } from '../types';

export const user: User = {
  id: '1',
  name: '사용자',
  email: 'user@example.com',
  profileImage: '/images/profile.jpg',
  streak: 5,
  xp: 250,
  languages: [
    {
      languageId: 'es',
      progress: 15,
      level: 2,
      lessonsCompleted: ['basics-1'],
    },
  ],
};
