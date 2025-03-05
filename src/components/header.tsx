import Link from 'next/link';
import { useStore } from '../store/useStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-500">Can Learn</span>
        </Link>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={'/default-avatar.png'} alt={'avatar'} />
                <AvatarFallback>UserName</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 p-2">
              <DropdownMenuItem className="font-bold text-gray-700 hover:bg-transparent cursor-default">
                UserName
              </DropdownMenuItem>
              <div className="border-b my-1"></div>

              <DropdownMenuItem className="flex items-center gap-2">
                <span className="text-amber-500">🔥</span>
                <span># days</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2">
                <span className="text-orange-500">⭐</span>
                <span># XP</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
