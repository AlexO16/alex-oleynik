import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';


const Footer = () => {
    return (
       <>
       <div className="footer">
        <a href="https://github.com/AlexO16" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://stackoverflow.com/" target='_blank' rel="noreferrer"><BsStackOverflow /></a>
        </div>
       </> 
    )
}

export default Footer