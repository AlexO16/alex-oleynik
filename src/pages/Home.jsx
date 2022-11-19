import alex from "../img/alex.jpeg"
import { Paper } from '@mui/material';

const Home = () => {
    return (
        <Paper elevation={4} style={{ margin: "35px", padding: "15px" }}>

            <div className="body">
                <img src={alex} alt="profile"></img>
                <h1 className="name">Alex Oleynik
                    <br></br>
                    Full Stack Developer</h1>
            </div>
        </Paper>
    )
};

export default Home 