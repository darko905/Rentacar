
import './App.scss';
import About from './Pages/About';
import Home from './Pages/Home';
import Models from './Pages/Models';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='about' element={<About/>}/>
        <Route index path='models' element={<Models/>}/>
      </Routes>
      
    </>
  );
}

export default App;
