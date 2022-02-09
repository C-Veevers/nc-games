import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { UserContext } from './contexts/User';



function App() {
  const [username, setUser] = useState("")
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username, setUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Main />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
