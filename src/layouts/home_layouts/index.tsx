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
      <Row className="margin-auto">
        <Col xs={12} className="margin-auto">
          <CarouselPage />
        </Col>
        <Col xs={12} className="margin-auto">
          <InvestmentOppurtunity />
        </Col>
        <Col xs={12} className="margin-auto">
          <Crowdfunding />
        </Col>
        <Col xs={12} className="margin-auto">
          <Ourfeatures />
        </Col>
        <Col xs={12} className="margin-auto">
          <CalltoAction />
        </Col>
        <Col xs={12} className="margin-auto">
          <SuccessStories />
        </Col>
        <Col xs={12} className="margin-auto">
          <OurReputation />
        </Col>
        <Col xs={12} className="margin-auto">
          <RiskWarning />
        </Col>
      </Row>
    </>
  );
};

export default HomeLayouts;
