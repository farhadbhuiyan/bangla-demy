import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header">
      <Navbar className="navbar" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img className="site-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Nav className="mr-auto nav-link">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Jumbotron className="banner-area">
        <div className="banner-content">
          <h1>Sale ends today</h1>
          <p>Skills activated for as low as $9.99. Ends tonight.</p>
          <label>What do you want to learn?</label>
          <input placeholder="What do you want to learn?" />
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;