import React from 'react'
import { Navbar, Container, Nav, Row, Col, Card, Button } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link> 
              <Nav.Link href="#qualification">Qualification</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <p>
                I am an aspiring full-stack developer pursuing a MERN stack course at Entri App. With a postgraduate
                degree in Polymer Chemistry, I bring analytical skills and creativity to software development.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="./photonew.jpg"
                alt="Profile"
                style={{ height: '250px', width: '250px' }}
                className="img-fluid rounded-circle"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="text-center">Skills</h2>
          <Row>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    Experience in JavaScript and frameworks like React, Node.js, and Express.js.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    Proficient in React for building dynamic single-page applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <Card.Title>MongoDB</Card.Title>
                  <Card.Text>
                    Skilled in MongoDB for database management and backend integrations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="qualification" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Qualifications & Certifications</h2>
        <Row>
          {/* Postgraduate Education */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Master of Science (M.Sc.)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Polymer Chemistry</Card.Subtitle>
                <Card.Text>
                  <strong>Year:</strong> Passed Out in 2021<br />
                  <strong>University:</strong> [Calicut University]<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Undergraduate Education */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Bachelor of Science (B.Sc.)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chemistry</Card.Subtitle>
                <Card.Text>
                  <strong>Year:</strong> Passed Out in 2019<br />
                  <strong>University:</strong> [Calicut University ]<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Certifications */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>MERN Stack Development</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ongoing</Card.Subtitle>
                <Card.Text>
                  <strong>Institution:</strong> Entri App<br />
                  <strong>Focus:</strong> Building robust, scalable full-stack applications using React, Node.js, MongoDB, and Express.js.<br />
                  <strong>Projects:</strong> Kerala Tourism Website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>

      <section id="experience" className="py-5">
        <Container>
          <h2 className="text-center">Experience</h2>
          <Row>
            <Col md={6}>
              <h4>Kerala Tourism Website</h4>
              <p>
                Designed and developed a responsive website using HTML, CSS, and Bootstrap, showcasing Kerala's cultural
                and natural heritage.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center">Contact Me</h2>
          <Row>
            <Col md={6} className="mx-auto text-center">
              <p>Feel free to reach out to me via email or LinkedIn.</p>
              <Button variant="primary" href="mailto:your-email@example.com">Email Me</Button>
              <Button
                variant="info"
                href="https://www.linkedin.com/in/your-linkedin-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                LinkedIn Profile
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-center text-white py-3">
        <Container>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};
export default App