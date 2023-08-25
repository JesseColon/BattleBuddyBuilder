import AccountDisplay from './components/AccountDisplay';
import Header from './components/Header';
import './App.css'
import { AccountProvider } from './utils/GlobalState';

import Nav from './components/Nav';

function App() {
  return (
    <AccountProvider>
      <div className="App">
        <Header />
        <Nav/>
        <AccountDisplay />
      </div>
    </AccountProvider>
  );
}

export default App;
