import { useState, ReactNode } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Directory from './directory';
import Meta, { MetaProps } from '@/components/layout/meta';


export default function Layout({
  meta,
  children
}: {
  meta: MetaProps;
  username?: string;
  children: ReactNode;
}) {


  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="w-full mx-auto h-screen flex overflow-hidden bg-black">
      <Meta props={meta} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Navbar */}
            <Navbar setSidebarOpen={setSidebarOpen} />
            {children}
          </main>
          <div className="hidden md:order-first h-screen md:flex md:flex-col">
            <Directory  />
          </div>
        </div>
      </div>
    </div>
  );
}
