import React, { lazy } from 'react';
import { createBrowserRouter, Outlet, Routes, Route, BrowserRouter } from 'react-router-dom';

const Welcomepage = lazy(() => import('../pages/welcome'));
const HomePage = lazy(() => import('../pages/home'));
const AdminLayout = lazy(() => import('components/Layouts/admin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/welcome',
    element: <Welcomepage />,
  },
  {
    path: '/layout',
    // element: <AdminLayout />,
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'auth',
        element: <h1>Auth</h1>,
      },
      {
        path: 'admin',
        element: <AdminLayout />,
      },
    ],
  },
]);

export default router;

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<HomePage />} index={true} />
          <Route path="welcome" element={<Welcomepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
