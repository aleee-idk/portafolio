import React from 'react';
import { Container } from 'react-bootstrap';

class Page extends React.Component {
  render() {
    return (
      <Container
        id={this.props.id}
        className="border rounded mt-5 p-4 px-md-auto"
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Page;
