import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Alex Oleynik</Link>
            <ul>
                <li className="link">
                    <Link onClick={() => props.setCurrTab("About")} className={props.currTab === 'About' ? 'nav-link active' : 'nav-link'} to="/about">About Me</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Portfolio")} className={props.currTab === 'Portfolio' ? 'nav-link active' : 'nav-link'} to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Contact")} className={props.currTab === 'Contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact Me</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Resume")} className={props.currTab === 'Resume' ? 'nav-link active' : 'nav-link'} to="resume">Resume</Link>
                </li>
            </ul>
        </nav >
    )
};

// {viw.map((View) = (
// <li className="link">
//      <Link to="{View.tab}" className={`${currTab === View.tab && 'link'}`}" onClick={() => setCurrTab}>About Me</Link>
// </li>
// ))}

export default Navbar