import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from 'routes/root';
import GlobalStyles from 'lib/GlobalStyles';
import RecoilProvider from 'components/providers/RecoilProvider';
import QueryProvider from 'components/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <QueryProvider>
        <RecoilProvider>
          <GlobalStyles />
          <RouterProvider router={router} />;
        </RecoilProvider>
      </QueryProvider>
    </Suspense>
  </React.StrictMode>,
);
