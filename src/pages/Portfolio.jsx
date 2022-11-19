import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import weather from '../img/weather.png';
import readmeGen from '../img/readmeGen.png';
import dayPlanner from '../img/dayPlanner.png';
import noteTaker from '../img/noteTaker.png';
import employee from '../img/employee.png';
import tracker from '../img/tracker.png';

const Portfolio = () => {
  return (
    <>
      <h1 className="projects">Projects</h1>
      <Row md={4}>
        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={weather} />
          <Card.Body>
            <Card.Title className="cardTitle mt-3 mb-5">Weather Dashboard</Card.Title>
            <Card.Text className="cardText">
              An app to check the current weather of a searched city and get a 5 day forcast.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink mt-5">
            <Card.Link href="https://github.com/AlexO16/weather-dashboard">GitHub</Card.Link>
            <Card.Link href="https://alexo16.github.io/weather-dashboard/">Deployed site</Card.Link>
          </Card.Body>
        </Card>

        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={readmeGen} />
          <Card.Body>
            <Card.Title className="cardTitle mt-5 mb-5">README Generator</Card.Title>
            <Card.Text className="cardText">
              Professional README generator.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink">
            <Card.Link href="https://github.com/AlexO16/readme-generator">GitHub</Card.Link>
            <Card.Link href="https://drive.google.com/file/d/1DBjkYwSOfOFIimpPxRlL1WsaLBlfWRem/view">Deployed site</Card.Link>
          </Card.Body>
        </Card>

        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dayPlanner} />
          <Card.Body>
            <Card.Title className="cardTitle">Work Day Scheduler</Card.Title>
            <Card.Text className="cardText">
              A daily work day planner.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink">
            <Card.Link href="https://github.com/AlexO16/work-day-scheduler">GitHub</Card.Link>
            <Card.Link href="https://alexo16.github.io/work-day-scheduler/">Deployed site</Card.Link>
          </Card.Body>
        </Card>

        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noteTaker} />
          <Card.Body>
            <Card.Title className="cardTitle mt-4 mb-5">Note Taker</Card.Title>
            <Card.Text className="cardText">
              A note taking app. Write, save and delete notes.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink">
            <Card.Link href="https://github.com/AlexO16/note-taker">GitHub</Card.Link>
            <Card.Link href="https://note-taker-production-45e1.up.railway.app/">Deployed site</Card.Link>
          </Card.Body>
        </Card>

        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={employee} />
          <Card.Body>
            <Card.Title className="cardTitle">Team Profile Generator</Card.Title>
            <Card.Text className="cardText">
              Generate a dynamic webpage that displays an employee's basic info.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink">
            <Card.Link href="https://github.com/AlexO16/team-profile-generator">GitHub</Card.Link>
            <Card.Link href="https://drive.google.com/file/d/1MfvIQnh-KRnF9Hdkka1d07svWUAp_med/view">Deployed site</Card.Link>
          </Card.Body>
        </Card>

        <Card className="container" border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={tracker} />
          <Card.Body>
            <Card.Title className="cardTitle">Employee Tracker</Card.Title>
            <Card.Text className="cardText">
              View and manage employee, department and role information.
            </Card.Text>
          </Card.Body>
          <Card.Body className="cardLink">
            <Card.Link href="https://github.com/AlexO16/employee-tracker">GitHub</Card.Link>
            <Card.Link href="https://drive.google.com/file/d/1gUA3u_o3u8i4UQRwhDpfwDmYLmalf4uc/view">Deployed site</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
};

export default Portfolio