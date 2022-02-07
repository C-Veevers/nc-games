import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Nav } from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
