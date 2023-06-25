import Link from 'next/link';
import { DirectoryIcon, SearchIcon } from '@/components/icons';


export default function Directory() {


  return (
    <aside className="flex-shrink-0 w-full bg-black sm:w-96 h-full overflow-scroll border-r border-gray-800">
      <div className="px-6 pt-6 pb-0 sticky top-0 bg-black z-20">
        <Link href="/">

          <div className="bg-dark-accent-1 hover:bg-dark-accent-2 transition-all rounded-2xl h-12 w-12 flex justify-center items-center">
            <DirectoryIcon className="text-white" />
          </div>

        </Link>
        <p className="mt-8 text-2xl text-white font-bold">Projects</p>
        <p className="mt-2 text-sm text-dark-accent-5">
          Search directory of 
          developers
        </p>
        <form className="py-8 flex space-x-4" action="#">
          <div className="flex-1 min-w-0">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative shadow-sm border-0 border-b-dark-accent-2 rounded-none border-b-[1px] ">
              <div className="absolute bg-black inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 text-dark-accent-3" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="text-white placeholder:text-dark-accent-3 focus:ring-transparent border-none bg-black focus:border-transparent block w-full pl-10 sm:text-sm rounded-md"
                placeholder="Search"
              />
            </div>
          </div>
        </form>
      </div>
      {/* Directory list */}
      <nav
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden"
        aria-label="Directory"
      >
      </nav>
    </aside>
  );
}
