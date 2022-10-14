import Benefits from "./Benefits";
import { Container, Row, Col } from "react-bootstrap";
function HowCanWeHelp() {
  return (
    <Container fluid>
      <Row>
        <h2>How We Can Help</h2>
      </Row>
      <Row className="d-flex justify-content-center flex-column">
        <Col className="benefitsCard">
          <Benefits />
        </Col>
        <Col className="benefitsCard">
          <Benefits />
        </Col>
        <Col className="benefitsCard">
          <Benefits />
        </Col>
        <Col className="benefitsCard">
          <Benefits />
        </Col>
      </Row>
    </Container>

    // <div className="howWeCanHelpHolder">
    //     <h2>How We Can Help</h2>
    //     <div className="benefitCardHolder">
    //         <Benefits />
    //         <Benefits />
    //         <Benefits />
    //         <Benefits />
    //     </div>
    // </div>
  );
}
export default HowCanWeHelp;
