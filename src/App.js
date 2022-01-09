import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Welcome from "./pages/welcome/Welcome";
import Game from './pages/game/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/game/:id' element={<Game />}/>
      </Routes>
    </Router>
  );
}

export default App;
