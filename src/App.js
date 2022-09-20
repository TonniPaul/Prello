import './App.css';
import SignUp from './components/sign-up/Sign-Up';
import SignIn from './components/sign-in/Sign-in';
import Dashboard from './components/scrumboard/dashboard';
import Hero from './components/hero/Hero';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
      <Routes className='padding'>
          <Route path='/' element={<Hero />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </div>
  );
}

export default App;
