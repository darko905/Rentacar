
import './App.scss';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import PickCar from './components/PickCar';
import Plan from './components/Plan';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Plan/>
      <PickCar/>
    </div>
  );
}

export default App;
