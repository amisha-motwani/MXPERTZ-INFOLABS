import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Styling/Navbar.scss";
import Space from "./assets/space.jpeg";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon1.png";

function Navpage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" block py-12"
        style={{
          backgroundImage: `url(${Space})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar expand="lg" className=" text-white py-3">
          <Container>
            <Navbar.Brand className="text-white">
              BrainyLingo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link className="text-white mx-4" onClick={()=> navigate("/")}>
                  Home
                </Nav.Link>
                <Nav.Link className="text-white mx-4">
                  Leaderboard
                </Nav.Link>
                <Nav.Link className="text-white mx-4">
                  Daily Quiz
                </Nav.Link>
                <NavDropdown
                  title="Genre"
                  id="basic-nav-dropdown"
                  className="text-white"
                >
                  <NavDropdown.Item  className="genre">
                    Genre 1
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item  className="text-white">
                    Genre 2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand>
              <button className="w-[fit-content] h-[fit-content] rounded-full text-[17px] text-white px-2 py-1 bg-gradient-to-r from-purple-500 to-sky-500">
                Sign-out
              </button>
            </Navbar.Brand>
          </Container>
        </Navbar>
        
      </div>
    </>
  );
}

export default Navpage;
