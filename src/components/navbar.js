import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withTranslation } from 'react-i18next';

class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_languaje: 'es', last_languaje: 'en' };
  }

  toggle_lenguaje = (event) => {
    let last_languaje = this.state.current_languaje;
    let current_languaje = event.target.value;
    this.setState({ current_languaje, last_languaje });
    this.props.i18n.changeLanguage(current_languaje);
  };
  render() {
    return (
      <Navbar
        expand="md"
        sticky="top"
        bg="dark"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home"> Home </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#main_page">Home</Nav.Link>
              <Nav.Link href="#description">Description</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#other">Other</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            <Button
              value={this.state.last_languaje}
              onClick={(e) => this.toggle_lenguaje(e)}
            >
              Lenguaje {this.state.current_languaje}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withTranslation()(MainBar);
