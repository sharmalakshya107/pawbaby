import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer/Footer'
import { TopNav } from '@/components/layout/TopNav/TopNav'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopNav />
      <main className="overflow-x-hidden pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
