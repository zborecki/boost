import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './routes/Layout';

const App = (): JSX.Element => (
  <RouterProvider router={createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '*',
          element: <div>Error 404</div>
        }
      ]
    }
  ])}
  />
);

export default App;
