import Contact from "./componenets/contact/Contact";
import Header from "./componenets/header/Header";
import Intro from "./componenets/introduction/Intro";
import Portfolio from "./componenets/portfolio/Portfolio";
import Nav from "./componenets/nav/Nav"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Header menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Nav menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
