import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={3} lg={4} className="g-4">
          
          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS1234 React JS</Card.Title>
                  <Card.Text>Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/4560/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/dbms.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS4560 DBMS</Card.Title>
                  <Card.Text>Database Management System</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/algorithm.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5800 Algorithms</Card.Title>
                  <Card.Text>Algorithms</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/5010/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/pdp.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5010 PDP</Card.Title>
                  <Card.Text>Programming Design Paradigm</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/3600/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/toc.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS3600 TOC</Card.Title>
                  <Card.Text>Theory of Computation</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/6700/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/oopj.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS6700 OOPJ</Card.Title>
                  <Card.Text>Object Oriented Programming in Java</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/5690/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/nlp.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5690 NLP</Card.Title>
                  <Card.Text>Natural Language Processing</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/8090/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reading.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS8090 Reading</Card.Title>
                  <Card.Text>Reading</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/5790/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/ml.jpeg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS5790 ML</Card.Title>
                  <Card.Text>Machine Learning</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card style={{ width: "300px" }}>
              <Link to="/Kambaz/Courses/1235/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/ai.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title>CS1235 AI</Card.Title>
                  <Card.Text>Artificial Intelligence</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
}
