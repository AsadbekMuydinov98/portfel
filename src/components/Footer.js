import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo1.PNG';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-3">
              <a href="https://www.linkedin.com/in/moriarty09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/asadbek.muydinov.56?mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/moriarty_0909?igshid=OGQ5ZDc2ODk2ZA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
