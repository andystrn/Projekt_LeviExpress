import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/reservation',
      element: <h2>Detail jízdenky</h2>
    },
  ])

 return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
 )

 
  
};
