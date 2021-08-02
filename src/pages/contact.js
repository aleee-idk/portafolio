import React from 'react';
import Page from '../components/page.js';
import { Col, Row } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <Page id="contact">
        <Row as="h1" className="mb-3">
          Contact Me
        </Row>
        this need the image of each social app, so i'll fix later
        <Row className={this.props.row_gutter}>
          <Col md as="section" className="item-list">
            Twitter
          </Col>
          <Col md as="section" className="item-list">
            Github
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Contact;
