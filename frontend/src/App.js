import {Routes, Route, Link} from 'react-router-dom'
import './App.scss';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route path='/TodoPage' element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
