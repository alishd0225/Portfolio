import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
