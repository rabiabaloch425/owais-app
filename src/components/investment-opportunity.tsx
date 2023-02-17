import { Row, Col } from "react-bootstrap";
import Input from "./input";
import OpportunityCard from "./opportunity-card";

const InvestmentOppurtunity = () => {
  return (
    <>
      <Row className="margin-auto">
        <Col xs={12} className="margin-auto">
          <div className="flex justify-center mt-[2em] mb-[2em]">
            <h1 className=" sm:!text-[1rem] md:!text-[1.8rem] text-[#03989E] sm:!py-[10px] md:!py-[20px]  sm:!px-[15px] md:!px-[26px] font-normal bg-[#9797971c] sm:!rounded-[12px] md:!rounded-[24px] ">
              الفرص الإستثمارية
            </h1>
          </div>
          <div className="flex justify-center  mb-[2em] mt-[-1em]">
            <h2 className=" sm:!text-[.9rem] md:!text-[1rem] text-[#9ca6afd5] font-normal sm:leading-5 md:leading-7  text-center sm:w-[90%] md:w-[70%]">
              من خلال منصة أويس المالية ، يمكن للمستثمرين استعراض الفرص
              الاستثمارية ، الاستثمار ، وانهاء الاجراءات القانونية عبر المنصة
              فوراً. استثمر الآن ابتداءً من 1000 ريال سعودي فقط . الشركات
              المدرجة على المنصة هي شركات تمت مراجعة معلوماتها والتأكد من صحتها
            </h2>
          </div>
          <div className="mb-[2em] mt-[2em] sm:px-[10px] md:px-[20px]">
            <Input />
          </div>
        </Col>
        <Col xs={12} className="margin-auto flex justify-end">
          <div className="mb-[2em] mt-[-1em] sm:px-[10px] md:px-[20px] flex sm:gap-2 md:gap-3">
            <button className="text-[#03989E]  border-[1px] border-[#03989E]  sm:text-[10px] md:text-[14px] sm:px-2 md:px-3 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
              الفرص النشطة
            </button>
            <button className="text-[#03989E]  border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-2 md:px-3 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
              الفرص القادمة
            </button>
            <button className="text-[#03989E]  border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-2 md:px-3 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
              الفرص المكتملة
            </button>
            <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-2 md:px-3 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
              جميع الفرص الاستثمارية
            </button>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          xs={12}
          md={4}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <OpportunityCard />
        </Col>
        <Col
          md={12}
          className=" flex justify-center mt-4 mb-10  sm:px-20 md:px-4"
        >
          <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-8 md:px-16 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
            عرض المزيد
          </button>
        </Col>
      </Row>
    </>
  );
};

export default InvestmentOppurtunity;
