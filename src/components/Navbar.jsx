import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
        <a href="/" className="site-title">Alex Oleynik</a>
        <ul>
            <li className="link">
                <a href="/about">About Me</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
            <li>
                <a href="resume">Resume</a>
            </li>
        </ul>
        </nav>
    )
};

export default Navbar