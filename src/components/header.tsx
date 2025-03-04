import Link from 'next/link';
import { useStore } from '../store/useStore';

export default function Header() {
  const { user } = useStore();

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-green-500">Can Learn</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-amber-500">🔥</span>
            <span>{user.streak} days</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">⭐</span>
            <span>{user.xp} XP</span>
          </div>

          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"></div>
        </div>
      </div>
    </header>
  );
}
