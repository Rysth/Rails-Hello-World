import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
