import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withTranslation } from 'react-i18next';

class MainBar extends React.Component {
  cycle_lenguaje = () => {
    let languages = this.props.i18n.languages;
    // Cycle array
    languages.push(languages.shift());
    this.props.i18n.changeLanguage(languages);
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

            <Button onClick={() => this.cycle_lenguaje()}>
              Lenguaje {this.props.i18n.languages[1]}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withTranslation()(MainBar);
