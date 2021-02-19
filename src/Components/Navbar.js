import '../Css/navbar.css';
import { Link, scrollToTop } from 'react-scroll';
import { useState } from 'react';

function Navbar() {

    const navHeight = 80;

    const [nav, setnav] = useState(false)
    
    const changeTransparency = () => {
        if (window.scrollY > 50) {
            setnav(true)
        } else {
            setnav(false)
        }
    };

    window.addEventListener("scroll", changeTransparency);

    return (
        <div className={nav ? "nav not-transparent" : "nav transparent"}>
            <div className="navbar">
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-1200}
                    duration={500}
                    >
                    <img className="nav-element" src="Logo.svg" onClick={scrollToTop}/>
                </Link>
                <ul className="main-nav">
                    <li className="nav-element">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-navHeight}
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
                            offset={-navHeight}
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
                            offset={-navHeight}
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
                            offset={-navHeight}
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
                    offset={-navHeight}
                    duration={500}
                    >
                    Contact
                </Link>
            </div>
        </div>
    ); 
}

export default Navbar;
