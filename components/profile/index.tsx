import {
  CheckInCircleIcon,
  EditIcon,
  XIcon,
  GitHubIcon,
  UploadIcon
} from '@/components/icons';
import Image from 'next/image';
import { useState } from 'react';


export const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
export const gradients = 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600';
  
  
export default function Profile() {

  const [activeTab, setActiveTab] = useState('Profile');

  const handleTabClick = (tabName:any) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen pb-20">
      <div>
        <div
         className={`h-48 w-full lg:h-64 
         ${gradients}`}
        />
        <div
          className={`${profileWidth} -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
        >
          <div className="relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32">
            < Image
              src="/IMG_2023_05_31_122706.jpg"
              alt="emage"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="flex min-w-0 flex-1 items-center space-x-2">
              <h1 className="text-2xl font-semibold text-white truncate">
                Gavin Arori
              </h1>
              <CheckInCircleIcon className="w-6 h-6 text-[#0070F3]" />
              </div>
        <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href={`https://github.com/gavinarori`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                >
                  <GitHubIcon className="mr-3 h-5 w-5 text-white" />
                  <span>View GitHub Profile</span>
                </a>
              </div>
          </div>
        </div>
        <div className='flex flex-col  mt-1 sm:ml-[180px] ml-2'>
                <h3 className='text-2sm font-semibold text-white truncate '>
                  Front-end developer
                  </h3>
       </div>
      </div>
      
      <div className='mt-6 ml-3 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:space-x-6 sm:pb-1 text-sm tracking-wider leading-6  text-gray-400 font-mono prose prose-headings:text-gray-400 prose-a:text-gray-400'>
      <div className="flex items-center ">
        <EditIcon className='w-6 h-6 mt-2'/>
        <h4 className='mr-1 mb-0 font-semibold  text-gray-400'>Professional Services</h4>
      </div>
      <div className="flex items-center">
        <XIcon className='w-6 h-6 mt-2'/>
        <h4 className='ml-1 mb-0 font-semibold  text-gray-400'>Nyeri, Kenya</h4>
      </div>
      <div className="flex items-center">
        <UploadIcon className='w-6 h-6 mt-2 mr-3'/>
        <h4 className='mb-0 font-semibold  text-gray-400'>joined September 2021</h4>
      </div>
    </div>
    
    <div className='mt-6 ml-3 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:space-x-6 sm:pb-1 text-sm tracking-wider leading-6'>
      <div className="flex items-center "><h4 className='mr-1 mb-0 font-semibold text-white text-2md'>4</h4 > <p className=' text-gray-400'>projects</p></div>
      <div className="flex items-center "><h4 className='mr-1 mb-0 font-semibold text-white text-2md'>4</h4 > <p className=' text-gray-400'>Clients</p></div>
    </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-800">
          <div className={`${profileWidth} mt-10`}>
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`${
                    tab.name === activeTab
                      ? 'border-white text-white'
                      : 'border-transparent text-gray-400 cursor-pointer'
                  }
                    whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className={`${profileWidth} mt-16`}>
        <h2 className="font-semibold font-mono text-2xl text-white">{activeTab}</h2>

          <article className="mt-3 max-w-2xl text-sm tracking-wider leading-6 text-white font-mono prose prose-headings:text-white prose-a:text-white">
             {/* Content based on activeTab */}
          {activeTab === 'Profile' && (
            <p>
              I am  a frontend developer proficient in Redux, JavaScript, TypeScript, React, Next.js, CSS, and HTML.
               With a strong focus on user experience, I specialize in creating seamless and visually appealing web applications.
              My expertise in managing application state with Redux, building interactive interfaces using JavaScript and TypeScript, 
              and leveraging frameworks like React and Next.js allows me to deliver high-quality, performant solutions.
            </p>
          )}

          {activeTab === 'Work History' && (
         <ul>
          <p>
          Freelancing as a Frontend Developer
            [currently]
            </p>
          <li>Currently working as a freelance frontend developer, providing customized solutions to clients.</li>
          <li>Collaborating remotely with clients to understand project requirements and deliver tailored frontend solutions.</li>
          <li>Demonstrating adaptability and problem-solving skills by successfully working on diverse projects with varying specifications and challenges.</li>
          <li>Delivering high-quality work within agreed-upon timelines, ensuring client satisfaction and building a strong professional reputation.</li>
          
         
          <p className='text-2xl'>
              Frontend Developer - Aiotech [2022]
            </p>
          <li>Developed and maintained frontend components for Aiotech's web applications, ensuring high-quality and performant user interfaces.</li>
          <li>Collaborated with cross-functional teams, including designers and backend developers, to deliver seamless and visually appealing user experiences.</li>
          <li>Implemented responsive designs using CSS and HTML, ensuring optimal accessibility and usability across various devices.</li>
          <li>Utilized Redux, JavaScript, TypeScript, React, Next.js, CSS, and HTML to build interactive and dynamic web applications.</li>
          <li>Played a key role in managing application state with Redux, ensuring efficient data flow and enhancing overall application performance.</li>
          <li>Participated in code reviews, providing constructive feedback to optimize code quality and maintain coding best practices.</li>
          <li>Actively contributed to the planning and execution of projects, meeting deadlines and delivering solutions that met client requirements.</li>
         </ul>
          )}

          {activeTab === 'Contact' && (
            
            <ul>
              <h2>Find me on:</h2>
              <li>
              Twitter:
              <a href="https://twitter.com/gavinogwanwa">@gavinogwanwa</a>
              </li>
              <li>
              GitHub:
              <a href="https://github.com/gavinarori">@gavinarori</a>
              </li>
              <li>
              LinkedIn:
              <a href="https://www.linkedin.com/in/gavin-arori-5b767122b">@Gavin Arori</a>
              </li>
              <li>
                Email me:
                <a href="https://mail.google.com/mail/">arorigavincode@gmail.com</a>
              </li>
            </ul>
          )}
          {activeTab === 'Gallery' && (
            
<div className=" dark:bg-gray-800 h-screen  py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div className="flex items-center gap-12">
        <p className=" max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
        Embark on a visual journey through my portfolio, where carefully curated images offer a glimpse into the tapestry of experiences that shape who I am. From exciting projects to cherished moments, each picture tells a story, inviting you to discover the multifaceted individual behind the work.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* image - start */}
      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="/Binance In Nyeri-1-54.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
      </a>
      {/* image - end */}

      {/* image - start */}
      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-900 shadow-lg md:col-span-2 md:h-80">
        <img src="/CANON_Canon EOS 80D_3491328-3538204_110.JPG" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
      </a>
      {/* image - end */}

      {/* image - start */}
      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src="/WhatsApp Image 2022-07-20 at 3.45.49 PM.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
      </a>
      {/* image - end */}

      {/* image - start */}
      <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="/CANON_Canon EOS 80D_3469440-3516316_108.JPG" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
      </a>
      {/* image - end */}
    </div>
  </div>
</div>

          
          )}
          </article>
       
      </div>

    </div>
  );
}
const tabs = [
  { name: 'Profile' },
  { name: 'Work History' },
  { name: 'Contact' },
  { name: 'Gallery' }
];
