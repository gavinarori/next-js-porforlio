
import Image from 'next/image';

import { MenuIcon } from '@heroicons/react/outline';
//import Link from 'next/link';

export default function Navbar({
  setSidebarOpen
}: {
  setSidebarOpen: (open: boolean) => void;
}) {

  return (
    <nav
      className="absolute right-0 w-full flex items-center justify-between md:justify-end px-4 h-16"
      aria-label="Navbar"
    >
      <button
        type="button"
        className="inline-flex md:hidden items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
       <div className='flex gap-2 mt-1 flex-row'>
       <a href='' className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/facebook.png"
                alt='User'
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
            <a href='' className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/instagram.png"
                alt='User'
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
            <a href='' className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/twitter.png"
                alt='User'
                width={50}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
        
       </div>
           
          
          
        
    </nav>
  );
}
