import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './views/dashboard/Dashboard';
import Home from './views/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} /> 
        <Route path='/home' element={<Home />} />  
      </Routes>
    </>
  );
}

export default App;
