import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from '../Navbars/AdminNavbar';
import Sidebar from '../Sidebars/sidebars';
import HeaderStats from '../Headers/HeaderStats';
import FooterAdmin from '../Footers/FooterAdmin';

// views

// import Dashboard from 'views/admin/Dashboard.js';
// import Maps from 'views/admin/Maps.js';
// import Settings from 'views/admin/Settings.js';
// import Tables from 'views/admin/Tables.js';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {/* <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch> */}
          <h1>content</h1>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
