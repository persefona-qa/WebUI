import React from 'react';
import { Navbar, Container } from "react-bootstrap";
const Menu = () => {
 return (
 <Navbar>
 <Container>
             <Navbar.Brand id='n01' href="#home">Bookshop</Navbar.Brand>
 <Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">
 <Navbar.Text id = 'n02'>
 Signed in as: <a href="#login">Natali</a>
 </Navbar.Text>
 </Navbar.Collapse>
 </Container>
 </Navbar>
 );
};
export default Menu;
