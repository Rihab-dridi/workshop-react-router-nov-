import "./App.css";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/home";
import Navbar from "./Components/Navbar";
import Profiles from "./Components/profiles";
import User from './Components/use'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//react router dom
//import Browser Router

//static route
//step1: link the URL with the needed  Component
//step2: link the url change with an element 

//dynamic route 
//step1: link the URL containing a variable with the needed  Component 
//step2: link the url change with an element + give a value to the variable in the url 
//step3: full the dynamic component with the data of a specific  user 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/user/:ID" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
