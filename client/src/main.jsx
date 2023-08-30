import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Pikachu from './pages/Pikachu';
import OptionTable from './pages/OptionTable'; 


import PokemonTeamB from './pages/PokemonTeamB';
import GridTabel from './pages/GridTable';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/success',
        element: <Success />
      },{
        path: '/pikachu',
        element: <Pikachu />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/pokemonTeamB',
        element: <PokemonTeamB />
      }, {
        path: '/optionTable',
        element: <OptionTable/>
      },{
        path: '/gridTable',
        element: <GridTable/>
      },      {
        path: '/products/:id',
        element: <Detail />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
