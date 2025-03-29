// RootLayout.jsx
import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <NavBar />
      {/* The <Outlet> will render the matched child route */}
      <Outlet />
    </>
  );
}

export default RootLayout;
