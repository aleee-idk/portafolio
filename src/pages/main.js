import React from 'react';
import Page from '../components/page.js';
import { Col, Container, Image, Row } from 'react-bootstrap';
import image_src from '../images/placeholder.jpg';

class MainPage extends React.Component {
  render() {
    return (
      <Page id={this.props.id}>
        <Row as="h1">Welcome!</Row>
        <Row>
          <Col md={4}>
            <Image src={image_src} rounded fluid />
          </Col>
          <Col className="align-self-center">
            <Row>
              <Col as="section">
                <ul>
                  <li>1° item</li>
                  <li>2° item</li>
                  <li>3° item</li>
                  <li>4° item</li>
                  <li>5° item</li>
                  <li>6° item</li>
                </ul>
              </Col>
              <Col as="section">
                <ul>
                  <li>1° item</li>
                  <li>2° item</li>
                  <li>3° item</li>
                  <li>4° item</li>
                  <li>5° item</li>
                  <li>6° item</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default MainPage;
