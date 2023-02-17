import { Row, Col } from "react-bootstrap";

const CalltoAction = () => {
  return (
    <>
      <div className="bg-[#03989E] sm:px-[30px] md:px-[70px] py-[50px] h-auto text-end mb-12 mt-10">
        <Row className="m-0 p-0 flex justify-center">
          <Col xs={12} md={6} className="flex justify-center">
            <div className="bg-white w-[280px]  py-[5em] px-4 shadow-double mt-7 mb-7 text-center">
              <h1 className="text-[#03989E]">اضف فرصتك الاستثمارية</h1>
              <h1 className="text-[#9CA6AF] mt-6">
                تحتاج استثمار يكبر وينمي مشروعك بشكل جدا سريع ؟ تقدم الان عبر
                بوابة سكوبير
              </h1>
              <div className="flex justify-center mt-12">
                <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-6 md:px-10 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
                  تقدم الان
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="flex justify-center">
            <div className="bg-white w-[280px]  py-[5em] px-4 shadow-double mt-7 mb-7 text-center">
              <h1 className="text-[#03989E]">اضف فرصتك الاستثمارية</h1>
              <h1 className="text-[#9CA6AF] mt-6">
                تحتاج استثمار يكبر وينمي مشروعك بشكل جدا سريع ؟ تقدم الان عبر
                بوابة سكوبير
              </h1>
              <div className="flex justify-center mt-12">
                <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] sm:px-6 md:px-10 sm:py-[5px] md:py-[10px] sm:rounded-[3px] md:rounded-[8px]">
                  تقدم الان
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CalltoAction;
