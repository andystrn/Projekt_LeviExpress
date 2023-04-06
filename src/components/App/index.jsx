import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/reservation',
      element: <Reservation />
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
