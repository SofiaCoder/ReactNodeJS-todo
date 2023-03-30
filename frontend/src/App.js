import {Routes, Route, Link} from 'react-router-dom'
import './App.scss';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import TodoPage from './pages/TodoPage';
import { SingleTodo } from './pages/SingleTodo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route path='/TodoPage' element={<TodoPage />} />
        <Route path='/Todos/:id' element={<SingleTodo />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
