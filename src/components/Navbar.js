import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./nav.css";

const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style={{marginRight:"80px"}}>
        <li class="nav-item">
          <a class="nav-link " style={{color:"black", marginRight:"50px"}} href="#">About</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" style={{color:"black", marginRight:"50px"}} href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"black"}} href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
{/* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        </div>
    )
}

export default Navbar;