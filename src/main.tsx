import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router, { MainRoute } from 'routes/root';
import GlobalStyles from 'lib/GlobalStyles';
import RecoilProvider from 'components/providers/RecoilProvider';
import QueryProvider from 'components/providers/QueryProvider';

import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <RecoilProvider>
        <GlobalStyles />
        <MainRoute />
        {/* <RouterProvider router={router} />; */}
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>,
);
