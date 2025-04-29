import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useParams,
} from 'react-router-dom';



const Product = () => {
  const { id } = useParams();
  return <h2>Product Details for ID: {id}</h2>;
};

const Layout = () => (
  <div>
   
    <hr />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:id', element: <Product /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}