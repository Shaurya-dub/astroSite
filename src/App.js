import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import MainBody from "./MainBody";
import About from "./About";
import Services from "./Services"
import Footer from "./Footer";

function App() {
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<MainBody />} />
        </Routes>   
        <Routes>
        <Route path="/about" element={<About />} />
        </Routes> <Routes>
        <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
