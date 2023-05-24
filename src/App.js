
import './App.scss';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Models from './Pages/Models';
import TeamPage from './Pages/TeamPage';
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
        <Route index path='contact' element={<Contact/>}/>
        <Route index path='team' element={<TeamPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
