import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter } from 'react-router-dom';
import Auth from './components/Auth';
import { RouterProvider } from 'react-router';
import Test from './documentation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth></Auth>
  },
  {
    path: "/documentation",
    element: <Test></Test>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;