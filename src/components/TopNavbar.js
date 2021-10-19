import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/TopNavbar.component.css';

class TopNavbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Navbar scrolling dark expand="md" variant="light" >
          <Container>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/">#home</Nav.Link>
                <Nav.Link href="/#about">#about me</Nav.Link>
                <Nav.Link href="/#experience">#experience</Nav.Link>
                <Nav.Link href="/#projects">#coding</Nav.Link>
                <Nav.Link href="/#photography">#photography</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;

    //<Nav.Link href="/posts">#blog</Nav.Link>
