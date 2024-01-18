import "./index.js";
import React from "react";
import Header from "./components/Header.js";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;

/*
import "./index.js";
function Mycomp({ name, nameClass, income = 10 }) {
  return (
    <>
      <div> 
        {name}:${income}
        <br></br>
        {nameClass}
      </div>
      <hr></hr>
    </>
  );
}
function App() {
  return (
    <div>
      <Mycomp name="Abhik" nameClass={"Class1"} />
      <Mycomp name={"Rony"} nameClass={"Class2"} />
      <Mycomp name={"rob"} nameClass={"Class3"} />
    </div>
  );
}
export default App;
*/
