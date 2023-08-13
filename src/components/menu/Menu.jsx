import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Project</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Achievements</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#CodingPlatforms">Profiles</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#newcontact">Contact</a>
        </li>
      </ul>
    </div>
  );
}