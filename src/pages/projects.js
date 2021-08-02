import React from 'react';
import Page from '../components/page.js';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

class Projects extends React.Component {
  render() {
    return (
      <Page id="projects">
        <Row as="h1" className="mb-3">
          Featured Projects:
        </Row>
        <Row className={this.props.row_gutter}>
          <CardGroup>
            <Col md>
              <Card className="mx-md-1">
                <Card.Body>
                  <Card.Title>Project 01</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="mx-md-1">
                <Card.Body>
                  <Card.Title>Project 02</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="mx-md-1">
                <Card.Body>
                  <Card.Title>Project 03</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Row>
      </Page>
    );
  }
}

export default Projects;
