import Image from 'next/image';
import { CheckInCircleIcon } from '@/components/icons';

export default function DirectoryResults() {
  return (
    <ul role="list" className="relative z-0 directory-divide-y">
        <li >
          <a href="">

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

          </a>
        </li>

        <li >
          <a href="">

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

          </a>
        </li>

        <li >
          <a href="">

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

          </a>
        </li>
        
        
        {/* Publications */}
        
        <div className='px-6 pt-6 pb-0'>
       <p className="mt-8 text-2xl text-white font-bold">Publications</p>
        <p className="mt-2 text-sm text-dark-accent-5">
          Search directory of 
          developers
        </p>
        <li >
          <a href="">

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

          </a>
        </li>
        <li >
          <a href="">

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

          </a>
        </li>

        </div>

        {/*tech stack */}
       <div className='px-6 pt-6 pb-0'>
       <p className="mt-8 text-2xl text-white font-bold">Tech stack</p>
        <p className="mt-2 text-sm text-dark-accent-5">
          Search directory of 
          developers
        </p>
        
  <div className="flex flex-col space-y-3 sm:flex-row gap-2">
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden mt-2">
        <Image src="/images.png" alt="projects" width={300} height={300} />
      </div>
    </div>
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden">
        <Image src="/download.png" alt="projects" width={300} height={300} />
      </div>
    </div>
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden">
        <Image src="/Typescript.svg.png" alt="projects" width={300} height={300} />
      </div>
    </div>
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden">
        <Image src="/download (2).png" alt="projects" width={400} height={300} />
      </div>
    </div>
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden">
        <Image src="/download (1).png" alt="projects" width={300} height={300} />
      </div>
    </div>
    <div>
      <div className="flex-shrink-1 h-12 w-12 rounded-full overflow-hidden">
        <Image src="/React-icon.svg.png" alt="projects" width={300} height={300} />
      </div>
    </div>
  </div>
  
</div>

         
        
    </ul>
  );
}
