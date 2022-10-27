import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


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
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <FontAwesomeIcon icon={brands("twitter")} />
              </a>
            </li> */}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
