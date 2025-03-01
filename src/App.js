import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import { BrowserRouter as Router , Routes  , Route } from "react-router-dom";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>

      
    </div>
  );
}

export default App;