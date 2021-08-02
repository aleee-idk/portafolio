import React from 'react';
import Page from '../components/page.js';
import { Col, Image, Row } from 'react-bootstrap';
import graph_01 from '../images/graph_01.jpg';
import graph_02 from '../images/graph_02.jpg';

class Skills extends React.Component {
  render() {
    return (
      <Page id="skills">
        <Row as="h1" className="mb-3">
          Skills
        </Row>
        <Row className={this.props.row_gutter}>
          <Col as="section" md>
            <Image src={graph_01} fluid />
          </Col>
          <Col as="section" md>
            <Image src={graph_02} fluid />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Skills;
