import '@/styles/globals.css';
import type { Metadata } from 'next'
import { SideNav } from '@/ui/side-nav'
import { TopNav } from '@/ui/top-nav'


export const metadata: Metadata = {
  title: 'Squadron',
  description: 'Squadron frontend',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
          <div className="h-screen flex flex-row">
            <div className="w-1/5 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"  >
              <SideNav />
            </div>
          <div className="w-4/5 flex flex-col h-screen"  >
            <TopNav />
            <div>{children}</div>
          </div>
        </div>
  )
}
