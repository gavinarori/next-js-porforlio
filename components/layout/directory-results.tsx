import Link from 'next/link';
import Image from 'next/image';
import { CheckInCircleIcon } from '@/components/icons';

export default function DirectoryResults() {
  return (
    <ul role="list" className="relative z-0 directory-divide-y">
        <li >
          <Link href="/">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/og.png"
                  alt="projects"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex-1 min-w-0">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                <div className="flex items-center space-x-1">
                  <p className="text-sm font-medium text-white truncate">
                    Home shop.
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                  @gavinarori
                </p>
              </div>
            </div>

          </Link>
        </li>
    </ul>
  );
}
