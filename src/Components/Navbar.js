import '../Css/navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className="navbar">
        <Link smooth to=""><img className="nav-element" src="Logo.svg"/></Link>
        <ul className="main-nav">
            <li className="nav-element">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-element">
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
            </li>
            <li className="nav-element">
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Experience
                </Link>
            </li>
            <li className="nav-element">
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Skills
                </Link>
            </li>
        </ul>
        <Link
            className="nav-element"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            Contact
        </Link>
    </div>
  );
}

export default Navbar;
