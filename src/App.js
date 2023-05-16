
import './App.scss';
import About from './Pages/About';
import Home from './Pages/Home';
import Models from './Pages/Models';
import TestominialPage from './Pages/TestominialPage';
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
        <Route index path='testominial' element={<TestominialPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
