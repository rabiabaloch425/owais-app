import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Footer from "../../components/footer";
import NavbarPage from "../../components/navbar";
import HomeLayouts from "../../layouts/home_layouts";

const Dashboard = () => {
  return (
    <>
      <Container fluid className="m-0 p-0 relative">
        <Row className="m-0 p-0">
          <Col xs={12} md={12} className="m-0 p-0">
            <NavbarPage />
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col xs={12} className="m-0 p-0">
            <HomeLayouts />
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col xs={12} className="m-0 p-0">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
