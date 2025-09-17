import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CityZen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">                             
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/report-issue">Report Issue</Nav.Link>
             <Nav.Link href="/track-reports">Track Reports</Nav.Link>
             <Nav.Link href="/all-reports">All Reports</Nav.Link>
             <Nav.Link href="/past-reports">Past Reports</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/map">Issue-map</Nav.Link>
               <Nav.Link href="/ngo">Community-page</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact-Us</Nav.Link>
              <Nav.Link href="/sign-up">Sign-Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
