import React from 'react';
import Page from '../components/page.js';
import { Col, Image, Row } from 'react-bootstrap';
import image_src from '../images/placeholder.jpg';
import { withTranslation } from 'react-i18next';

class MainPage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Page id="main_page">
        <Row as="h1" className="mb-3">
          {t('main.title')}
        </Row>
        <Row className={this.props.row_gutter}>
          <Col md={4}>
            <Image src={image_src} rounded fluid />
          </Col>
          <Col md className="align-self-center">
            <Row className={this.props.row_gutter}>
              <Col md as="section">
                {t('main.content.1')}
              </Col>
              <Col md as="section">
                {t('main.content.2')}
              </Col>
            </Row>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withTranslation()(MainPage);
