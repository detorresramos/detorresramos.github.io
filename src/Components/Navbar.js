import '../Css/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <a><img src="Logo.svg"/></a>
        <ul className="main-nav">
            <li className="nav-element">
                <a>About Me</a>
            </li>
            <li className="nav-element">
                <a>Projects</a>
            </li>
            <li className="nav-element">
                <a>Experience</a>
            </li>
            <li className="nav-element">
                <a>Skills</a>
            </li>
        </ul>
        <a id="contact">Contact</a>
    </div>
  );
}

export default Navbar;
