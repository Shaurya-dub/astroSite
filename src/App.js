import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Switch path="/" component={MainBody}>
        </Switch> 
        <Switch path="/Services" component={Services}>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
