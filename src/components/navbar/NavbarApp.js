import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const NavbarApp = () => {
  return (
    <div className="container bg-light text-left">
      <div className="row">
        <div className="col-12">
          <Navbar bg="dark">
            <Navbar.Brand>
              <Link style={{color: "white", textDecoration: "none"}} to="/">Home Page</Link>
            </Navbar.Brand>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavbarApp;
