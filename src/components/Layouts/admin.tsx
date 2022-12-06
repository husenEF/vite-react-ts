import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// components

import Sidebar from 'components/Sidebars/sidebars';
import FooterAdmin from 'components/Footers/FooterAdmin';

export default function Admin() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen bg-blue-200">
        <div className="flex flex-col h-screen">
          <div className="container mx-auto flex-1">
            <Outlet />
          </div>
          <FooterAdmin />
        </div>
      </div>
    </Suspense>
  );
}
