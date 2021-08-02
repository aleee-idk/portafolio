import React from 'react';
import Page from '../components/page.js';
import { Col, Image, Row } from 'react-bootstrap';
import image_src from '../images/placeholder.jpg';

class MainPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Page id="main_page">
        <Row as="h1" className="mb-3">
          Welcome!
        </Row>
        <Row className={this.props.row_gutter}>
          <Col md={4}>
            <Image src={image_src} rounded fluid />
          </Col>
          <Col md className="align-self-center">
            <Row className={this.props.row_gutter}>
              <Col md as="section" className="item-list">
                <ul>
                  <li>1° item</li>
                  <li>2° item</li>
                  <li>3° item</li>
                  <li>4° item</li>
                  <li>5° item</li>
                  <li>6° item</li>
                </ul>
              </Col>
              <Col md as="section" className="item-list">
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
