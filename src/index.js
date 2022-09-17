import React from 'react';
import ReactDOM from 'react-dom/client';
import CardAnimal from './components/CardAnimal';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AnimalGalleryPage from './routes/AnimalGallery.page';
import HomePage from './routes/Home.page';
import NavbarPage from './routes/Navbar.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/cardAnimal",
        element: <CardAnimal />,
      },
      {
        path: "/animalGallery",
        element: <AnimalGalleryPage />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
