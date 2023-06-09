import BannerInfo from "./banner-info";
import NavBar from "../nav-bar";
import styles from "./style.module.scss";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap"
import "./style.css"

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="cabecalho__nav"
      >
        <Navbar.Brand href="/">
          <img className="cabecalho__logo" src="/assets/img/logo-main.png" alt="" />
          {/* <Logo
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Item</Nav.Link>
            <Nav.Link href="#pricing">Item</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Item</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Item
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavBar />
      <div className={styles.cabecalho__banner}>
        <BannerInfo />
      </div>
    </header>
  );
}
