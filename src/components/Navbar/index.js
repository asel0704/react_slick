import React from "react";
import { Navbar,Container} from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";

export default function Navbars() {
  return (
    <NavWrapper>
        <Container>
        <Navbar expand="lg">
          <Link to="/">
            <img src="https://i.pinimg.com/736x/73/4a/b0/734ab039f0b24c42c5392cb57817ecec.jpg" style={{
              width:'180px',
              height:'110px',
              borderRadius:'150%',
              display: 'block',
              marginLeft:'450px'
              }}/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav dark" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}