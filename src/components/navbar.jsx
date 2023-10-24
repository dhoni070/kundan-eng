import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kundan Engineering</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About Us</Nav.Link>
                <Nav.Link href="#pricing">Industries Served</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navb;