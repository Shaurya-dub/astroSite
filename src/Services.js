import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
    return (
      <Container fluid>
        <Row className="rowHeading">
          <h2>Services</h2>
        </Row>
        <Row className="d-flex justify-content-center flex-column">
          <Col className="servicesCard">
            <div className="servicesImageHolder">
              <img src="https://placekitten.com/250/250" alt="placeholder" />
            </div>
            <div className="servicesTextHolder">
              <h3>Astrology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione quisquam suscipit? In quidem repudiandae qui porro
                fugit, ipsa alias adipisci explicabo consectetur dolores sequi
                cumque, itaque iure laboriosam suscipit? Quos magni laudantium
                natus ea! Veniam odit aliquid incidunt dolorem cumque autem qui
                architecto quibusdam velit, accusamus facere asperiores
                molestias vitae deleniti doloribus aspernatur hic nisi illo
                facilis tempora dicta.
              </p>
            </div>
          </Col>
          <Col className="servicesCard">
            <div className="servicesImageHolder">
              <img src="https://placekitten.com/250/250" alt="placeholder" />
            </div>
            <div className="servicesTextHolder">
              <h3>Numerology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione quisquam suscipit? In quidem repudiandae qui porro
                fugit, ipsa alias adipisci explicabo consectetur dolores sequi
                cumque, itaque iure laboriosam suscipit? Quos magni laudantium
                natus ea! Veniam odit aliquid incidunt dolorem cumque autem qui
                architecto quibusdam velit, accusamus facere asperiores
                molestias vitae deleniti doloribus aspernatur hic nisi illo
                facilis tempora dicta.
              </p>
            </div>
          </Col>
          <Col className="servicesCard">
            <div className="servicesImageHolder">
              <img src="https://placekitten.com/250/250" alt="placeholder" />
            </div>
            <div className="servicesTextHolder">
              <h3>Vaastu</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ratione quisquam suscipit? In quidem repudiandae qui porro
                fugit, ipsa alias adipisci explicabo consectetur dolores sequi
                cumque, itaque iure laboriosam suscipit? Quos magni laudantium
                natus ea! Veniam odit aliquid incidunt dolorem cumque autem qui
                architecto quibusdam velit, accusamus facere asperiores
                molestias vitae deleniti doloribus aspernatur hic nisi illo
                facilis tempora dicta.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};
export default Services;
