import React from 'react';
import Page from '../components/page.js';
import { Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_chart_type: 'bar',
      chart_types: ['bar', 'doughnut', 'line', 'pie', 'polarArea', 'radar'],
    };
  }
  render() {
    const languajes_exp = {
      labels: ['Python', 'Javascript', 'Bash', 'C++'],
      datasets: [
        {
          type: this.state.selected_chart_type,
          label: 'Languages',
          backgroundColor: [
            'rgba(37,155,36,1)', // Green
            'rgba(229,28,35,1)', // Red
            'rgba(158,158,158,1)', // Grey
            'rgba(3,169,244,1)', // LightBlue
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [8.5, 7, 7, 4],
        },
      ],
    };

    const area_exp = {
      type: this.state.char_type,
      labels: ['backend', 'frontend', 'Desktop Apps'],
      datasets: [
        {
          type: this.state.selected_chart_type,
          label: 'Area',
          backgroundColor: [
            'rgba(37,155,36,1)', // Green
            'rgba(229,28,35,1)', // Red
            'rgba(3,169,244,1)', // LightBlue
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [9, 6.5, 4],
        },
      ],
    };

    const libraries_exp = {
      labels: [
        'Flask',
        'Express',
        'Bootstrap',
        'React',
        'BeautifoulSoup',
        'Selenium',
      ],
      datasets: [
        {
          type: this.state.selected_chart_type,
          label: 'Libraries',
          backgroundColor: [
            'rgba(37,155,36,1)', // Green
            'rgba(229,28,35,1)', // Red
            'rgba(3,169,244,1)', // LightBlue
            'rgba(158,158,158,1)', // Grey
            'rgba(255,158,0,1)', // Orange
            'rgba(121,85,72,1)', // Orange
          ],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [8, 7, 8, 7.5, 9, 8],
        },
      ],
    };
    const { t } = this.props;

    return (
      <Page id="skills">
        <Row
          className={this.props.row_gutter + ' mb-3 justify-content-between'}
        >
          <Col as="h1">{t('skills.title')}</Col>
          <Col>
            <DropdownButton
              id="dropdown-basic-button"
              title={t('skills.content.chart_dropdown')}
              onSelect={(event) =>
                this.setState({ selected_chart_type: event })
              }
            >
              {this.state.chart_types.map((item) => (
                <Dropdown.Item
                  active={this.state.selected_chart_type == item ? true : false}
                  eventKey={item}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Row>
        <Row className={this.props.row_gutter}>
          <Col as="section" md>
            <Bar data={languajes_exp} />
          </Col>
          <Col as="section" md>
            <Bar data={area_exp} />
          </Col>
          <Col as="section" md>
            <Bar data={libraries_exp} />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default withTranslation()(Skills);
