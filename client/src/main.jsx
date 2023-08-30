import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch'; ///Do not delte as it will crash the page
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';
import Pikachu from './pages/Pikachu';
import Teams from  './pages/Teams';
import PokemonTeamB from './pages/PokemonTeamB';
import OptionTable from './pages/OptionTable'; 
import PokemonCard from '../src/components/Nav/PokemonCard';
import FloatingCard from '../src/components/Nav/FloatingCard';
import Youtube from '../src/components/Nav/Youtube';

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
      }, 
      // {
      //   path: '/success',
      //   element: <Success />
      // },
      {
        path: '/pikachu',
        element: <Pikachu />
      },{
        path: '/teams',
        element: <Teams />
      }, {
        path: '/pokemonTeamB',
        element: <PokemonTeamB />
      },{
        path: '/optionTable',
        element: <OptionTable/>
      },{
        path: '/pokemonCard',
        element: <PokemonCard/>
      },{
        path: '/FloatingCard',
        element: <FloatingCard/>
      }, {
        path: '/youtube',
        element: <Youtube/>
      }
      //  {
      //   path: '/orderHistory',
      //   element: <OrderHistory />
      // }, 
      // {
      //   path: '/products/:id',
      //   element: <Detail />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// 'https://youtu.be/Zyt2GKb6qWw?si=urEDuoS0IT6tgyPW',
// 'https://youtu.be/d722bGusttw?si=0zJShl5EIiMNrK0f',
// 'https://youtu.be/dkVNZY8hoR8?si=j7Sy92ZtCUgjN7C3',
// 'https://youtu.be/LA9mX6uxgvM?si=j3_Lb2Y2Bd6adunQ',