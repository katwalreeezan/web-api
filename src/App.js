import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/services' element ={<Services/>}/>
  <Route path='/career' element ={<Career/>}/>
  <Route path='/contact' element ={<Contact/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
