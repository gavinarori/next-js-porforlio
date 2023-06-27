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
            <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.
            Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
            </p>
          )}

          {activeTab === 'Work History' && (
            <p>Content for Work History tab</p>
          )}

          {activeTab === 'Contact' && (
            <p>Content for Contact tab</p>
          )}
          </article>
       
      </div>

    </div>
  );
}
const tabs = [
  { name: 'Profile' },
  { name: 'Work History' },
  { name: 'Contact' }
];
