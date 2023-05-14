
import './App.scss';
import About from './Pages/About';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='about' element={<About/>}/>
      </Routes>
      
    </>
  );
}

export default App;
