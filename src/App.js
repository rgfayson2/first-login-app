import { useState } from 'react';
import Login from './components/Login'
import SecretStuff from './components/SecretStuff';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <header>
      <h1>My first login</h1>
    {isLoggedIn
    ? <SecretStuff />
    : <Login />
    }
    </header>
    </>
  );
}

export default App;
