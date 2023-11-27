import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
