import { Navbar, Container, Nav } from "react-bootstrap"
import accounting from "./accounting.png"
const CustomNavbar = (props) => {
  return (
    <header>
      <Navbar variant="dark" sticky="top" style={{backgroundColor: "#5f02f5"}}>
        <Container>
          <Navbar.Brand href="#home">
          <img
              src={accounting}
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
              alt="React Bootstrap logo"
            />
            Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
