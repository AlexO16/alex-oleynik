import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';


const Footer = () => {
    return (
       <>
       <div className="footer">
        <IconContext.Provider value={{ color: 'red', size: '50px'}}>
        <a href="https://github.com/AlexO16" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://stackoverflow.com/" target='_blank' rel="noreferrer"><BsStackOverflow /></a>
        </IconContext.Provider>
        </div>
        
       </> 
    )
}

export default Footer