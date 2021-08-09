import React from 'react';
import Page from '../components/page.js';
import { Col, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

class Description extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Page id="description">
        <Row as="h1" className="mb-3">
          {t('description.title')}
        </Row>
        <Row className={this.props.row_gutter}>
          <Col md as="section" className="item-list">
            <ul>
              {Object.keys(t('description.content.list_1')).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Col>
          <Col md as="section" className="item-list">
            <ul>
              {Object.keys(t('description.content.list_2')).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withTranslation()(Description);
