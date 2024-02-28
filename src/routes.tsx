import { createBrowserRouter } from 'react-router-dom'

import { About } from './pages/app/about'
import { Home } from './pages/app/home'
import { NotFound } from './pages/errors/404'
import { ErrorPage } from './pages/errors/error'
import { AppLayout } from './pages/layouts/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre-o-flowmodoro', element: <About /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
