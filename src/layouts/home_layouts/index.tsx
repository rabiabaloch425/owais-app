import { Row, Col } from "react-bootstrap";
import CalltoAction from "../../components/call-to-action";
import CarouselPage from "../../components/carousel";
import Crowdfunding from "../../components/crowdfunding";
import InvestmentOppurtunity from "../../components/investment-opportunity";
import Ourfeatures from "../../components/our-features";
import OurReputation from "../../components/our-reputation";
import RiskWarning from "../../components/risk-warning";
import SuccessStories from "../../components/success-stories";

const HomeLayouts = () => {
  return (
    <>
      <Row className="m-0 p-0">
        <Col xs={12} className="m-0 p-0">
          <CarouselPage />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <InvestmentOppurtunity />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <Crowdfunding />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <Ourfeatures />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <CalltoAction />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <SuccessStories />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <OurReputation />
        </Col>
        <Col xs={12} className="m-0 p-0">
          <RiskWarning />
        </Col>
      </Row>
    </>
  );
};

export default HomeLayouts;
