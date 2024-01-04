import './App.css';
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="dreamy">Dreamy Ice Creamy</header>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
