import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">CityZen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/report-issue">Report Issue</Nav.Link>
             <Nav.Link href="/track-reports">Track Reports</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/contact">Contact-Us</Nav.Link>
              <Nav.Link href="/sign-up">Sign-Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
