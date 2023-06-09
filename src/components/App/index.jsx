import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation/:reservationId',
    element: <Reservation />
  },
])

export const App = () => {
 return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
 ) 
};
