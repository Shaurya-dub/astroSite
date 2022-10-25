import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import MainBody from "./MainBody";
import Services from "./Services"
import Footer from "./Footer";

function App() {
  
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<MainBody />} />
        </Routes>   
        <Routes>
        <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
