import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout/MainLayout'
import { ROUTES } from '@/constants/routes'
import { CarePage } from '@/pages/CarePage/CarePage'
import { GalleryPage } from '@/pages/GalleryPage/GalleryPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'care', element: <CarePage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
