import alex from "../img/alex.jpeg"
const About = () => {
    return (
        <div>
            <h1 className="abtTitle">About Me</h1>
            <p className="abtBody">Hello my name is Alex and I am currently a student at the University of Minnesota, working to receive my Full Stack Web Developer certificate. I graduated from Le Cordon Bleu in 2014, before transitioning from the food industry I worked as a chef at Augustana Regent. In my free time, I enjoy going on hikes, playing video games and creating delicious meals. I enjoy making roast beef and mashed potatoes, but I enjoy eating it even more. I have a passion for experimenting with code and learning about it. Working with JavaScript is awesome, and allows me to explore the design and functionality of websites</p>
            <div>
                <img className="profile-pic" src={alex} alt="profile"></img>
            </div>
        </div>

    )
};

export default About