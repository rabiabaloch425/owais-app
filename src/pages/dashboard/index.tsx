import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Footer from "../../components/footer";
import NavbarPage from "../../components/navbar";
import HomeLayouts from "../../layouts/home_layouts";

const Dashboard = () => {
  return (
    <>
      <Container fluid className="margin-auto relative">
        <Row className="margin-auto">
          <Col xs={12} md={12} className="margin-auto">
            <NavbarPage />
          </Col>
        </Row>
        <Row className="margin-auto">
          <Col xs={12} className="margin-auto">
            <HomeLayouts />
          </Col>
        </Row>
        <Row className="margin-auto">
          <Col xs={12} className="margin-auto">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
