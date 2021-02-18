import '../Css/navbar.css';
import { Link } from 'react-scroll';
import { Component } from 'react';

class Navbar extends Component {

    state = {
        style: " transparent"
    };
    
    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ style: " not-transparent" });
        } else {
            this.setState({ style: " transparent" });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        return (
            <div className={"navbar-container" + this.state.style}>
                <div className="navbar">
                    <Link smooth to="">
                        <img className="nav-element" src="Logo.svg"/>
                    </Link>
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
            </div>
        );
    }
  
}

export default Navbar;
