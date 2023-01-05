import alex from "../img/alex.jpeg"
import { Paper } from '@mui/material';

const About = () => {
    return (
        <Paper elevation={4} style={{ margin: "50px", padding: "15px" }}>
            <h1 className="abtTitle">About Me</h1>
            <div className="bio">
                <p className="abtBody">Recent graduate of a 12 week, full time web development Boot Camp requiring 50 hours a week for projects and independent study. Intensive cohort focused around technical languages and applications. Knowledgeable of frontend and backend development requirements. Collaborative, detail-oriented, and motivated professional with excellent and adaptable technical skills looking for entry level opportunities in full-stack web development.</p>
                <div>
                    <img className="profile-pic" src={alex} alt="profile"></img>
                </div>
            </div>
        </Paper>

    )
};

export default About