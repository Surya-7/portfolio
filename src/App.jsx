import Topbar from "./components/topbar/Topbar.jsx"
import Intro from "./components/intro/Intro.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";
import CodingPlatforms from "./components/codingPlatforms/CodingPlatforms.jsx";
import NewContact from "./components/newContact/NewContact.jsx";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <CodingPlatforms />
        <NewContact/>
      </div>
    </div>
  );
}

export default App;
