import NavBar from "./components/NavBar";
import "./App.css";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Release from "./components/Release";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div class="navContainer">
          <NavBar />
        </div>

        <div className="mainContainer">
          <Routes>
            <Route path="/PetHeaven" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/funcat" element={<Cats />} />
            <Route path="/fundog" element={<Dogs />} />
            <Route path="/adopt" element={<Adopt/>}/>
            <Route path="/volunteer" element={<Volunteer/>}/>
            <Route path="/release" element={<Release/>}/>
          </Routes>
        </div>

        <div class="contactContainer">
          <Contact/>
        </div>
      </Router>
    </>
  );
}

export default App;
