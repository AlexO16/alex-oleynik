import resume from "../img/resume.png"
import { SiJavascript, SiCss3, SiBootstrap, SiMysql, SiMongodb, SiExpress } from 'react-icons/si'
import { IoLogoHtml5, IoLogoNodejs } from 'react-icons/io'
import { DiJqueryLogo, DiReact } from 'react-icons/di'
import { IconContext } from 'react-icons/lib';

const Resume = () => {
    return (
        <>
            <div className="resumeImg">
                <a href='https://docs.google.com/document/d/1uVwHFo8lVCBqSpdIfnNuFHS36_Y6hZUGNG764QtNjwc/edit?usp=sharing' target="_blank" rel="noreferrer>">
                    <img src={resume} alt="demo resume"></img>
                </a>
            </div>
            <br></br>
                <div className="techStack">
                    <h1>My Tech Stack: </h1>
                    <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                    <SiJavascript />
                    <SiCss3 />
                    <SiBootstrap />
                    <SiMysql />
                    <IoLogoHtml5 />
                    <DiJqueryLogo />
                    <DiReact />
                    <SiExpress />
                    <SiMongodb />
                    <IoLogoNodejs />
                    </IconContext.Provider>
                </div>
        </>
    )
};

export default Resume