import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Welcomepage = lazy(() => import('../pages/welcome'));
const HomePage = lazy(() => import('../pages/home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/welcome',
    element: <Welcomepage />,
  },
]);

export default router;
