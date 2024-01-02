import Image from 'next/image';
import { CheckInCircleIcon } from '@/components/icons';

export default function DirectoryResults() {
  return (
    <ul role="list" className="relative z-0 directory-divide-y">
        
        <li >
          <a href="#">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/urgent.png"
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
                  Distress App
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                   coming soon!!....
                </p>
              </div>
            </div>

          </a>
        </li>
        <li >
          <a href="https://gallery-web-five.vercel.app/">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/4503941.png"
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
                  gallery-web
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                Share your favorite....
                </p>
              </div>
            </div>

          </a>
        </li>
        <li >
          <a href="https://my-shopping-cart-bag-application.vercel.app/">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/images (1).png"
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
                  style and fash...
                </p>
              </div>
            </div>

          </a>
        </li>

        <li >
          <a href="https://enchanting-pothos-b10347.netlify.app/">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/unnamed.png"
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
                    Movie app
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                  uses TMDI api...
                </p>
              </div>
            </div>

          </a>
        </li>

        <li >
          <a href="https://chimerical-marigold-281d31.netlify.app/">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/90b00a3cbc0706eceef0f048eafc878f.jpg"
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
                  my-E-commerce-app
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                There are many variations...
                </p>
              </div>
            </div>

          </a>
        </li>
        
        
        {/* Publications */}
        
        <div className='px-6 pt-6 pb-0'>
       <p className="mt-8 text-2xl text-white font-bold">Publications</p>
        <p className="mt-2 text-sm text-dark-accent-5">
          Check out my articles on:
        </p>
        <li >
          <a href="https://gavinarori.hashnode.dev/redux-and-redux-toolkitrtk">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/CDyAuTy75.png"
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
                  Redux and Red..
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                Redux is a predictabl...
                </p>
              </div>
            </div>

          </a>
        </li>
        <li >
          <a href="https://medium.com/@arorigavincode/react-router-dom-7cc9df31921a">

            <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src="/medium-2020-new-logo-4DD1CA1BFF-seeklogo.com.png"
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
                  React-router dom
                  </p>
                    <CheckInCircleIcon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-dark-accent-5 truncate">
                React-router dom is ...
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
          Current tech stack:
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
