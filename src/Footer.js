import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="footerLogo">
            <img src="https://placekitten.com/250/250" alt="placeholder" />
          </div>
        </Col>
        <Col>
          <div className="footerCard">
            <h4>Heading one</h4>
            <ul>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
            </ul>
          </div>
        </Col>

        <Col>
          <div className="footerCard">
            <h4>Heading one</h4>
            <ul>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
              <li>
                <a href="#">Links Go Here</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="socialIcons">
        <div className="footerSocialCard">
          <h4>Heading one</h4>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
