import React from 'react';
import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer
        className="bg-body-secondary flex 
  "
      >
        <div className="container  py-4">
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
};
