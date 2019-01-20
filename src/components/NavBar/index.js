import React from 'react';
import { Navbar } from 'react-bootstrap';

export default () => (
  <Navbar sticky="top" expand="lg" className="navbar-dark bg-dark todo-navbar">
    <Navbar.Brand href="/">Simple ToDo</Navbar.Brand>
  </Navbar>
);
