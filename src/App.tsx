import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from './components/Error404';
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
          element: <Error404 />
        }
      ]
    }
  ])}
  />
);

export default App;
