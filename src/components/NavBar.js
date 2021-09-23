import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //create an a tag for each element
  //<a href="#home" key="home"> home </a>


  return <nav>
    <a href="#home" key="home">home</a>
    <a href="#about" key="about">about</a>
    <a href="#projects" key="projects">projects</a>
  </nav>;
}

export default NavBar;
