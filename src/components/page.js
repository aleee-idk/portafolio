import React from 'react';
import { Row, Container } from 'react-bootstrap';

class Page extends React.Component {
  render() {
    return (
      <Container id={this.props.id} className="mt-3">
        {this.props.children}
      </Container>
    );
  }
}

export default Page;
