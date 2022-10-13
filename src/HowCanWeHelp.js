import Benefits from "./Benefits";
import { Container, Row, Col } from "react-bootstrap";
function HowCanWeHelp() {
  return (
    <Container fluid>
      <Row>
        <h2>How We Can Help</h2>
      </Row>
      <Row>
        <Col>
          <Benefits />
        </Col>
        <Col>
          <Benefits />
        </Col>
        <Col>
          <Benefits />
        </Col>
        <Col>
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
