
import './App.scss';
import Home from './Pages/Home';
import Banner from './components/Banner';
import Choose from './components/Choose';
import Download from './components/Download';
import Faq from './components/Faq';
import NavBar from './components/NavBar';
import PickCar from './components/PickCar';
import Plan from './components/Plan';
import Testominial from './components/Testominial';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Plan/>
      <PickCar/>
      <Banner/>
      <Choose/>
      <Testominial/>
      <Faq/>
      <Download/>
    </div>
  );
}

export default App;
