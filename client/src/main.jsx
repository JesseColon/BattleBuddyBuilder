import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';

import NoMatch from './pages/NoMatch';
import Login from './pages/Login';


import Pikachu from './pages/Pikachu';
import OptionTable from './pages/OptionTable'; 
// import CreateTeams from './pages/CreateTeams';

import PokemonTeamB from './pages/PokemonTeamB';



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
        path: '/createTeams',
        element: <CreateTeams/>
      },{
        path: '/pikachu',
        element: <Pikachu />
      }, {
        path: '/pokemonTeamB',
        element: <PokemonTeamB />
      }, {
        path: '/optionTable',
        element: <OptionTable/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
