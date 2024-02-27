import { createBrowserRouter } from 'react-router-dom'

import { About } from './pages/app/about'
import { Home } from './pages/app/home'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/errors/404'
import { ErrorPage } from './pages/errors/error'
import { AppLayout } from './pages/layouts/app'
import { AuthLayout } from './pages/layouts/auth'

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
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
