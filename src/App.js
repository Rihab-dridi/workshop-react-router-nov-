
import './App.css';
import AboutUs from './Components/AboutUs';
import Home from './Components/home';
import Navbar from './Components/Navbar';
import Profiles from './Components/profiles'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Profiles/>
 
    </div>
  );
}

export default App;
