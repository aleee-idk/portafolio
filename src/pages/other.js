import React from 'react';
import Page from '../components/page.js';
import { Col, Row } from 'react-bootstrap';

class Other extends React.Component {
  render() {
    return (
      <Page id="other">
        <Row as="h1" className="mb-3">
          Other Stuff About Me...
        </Row>
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
      </Page>
    );
  }
}

export default Other;