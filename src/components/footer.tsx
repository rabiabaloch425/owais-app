import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-[#03989E] h-[auto] py-12 border-b-[8px] border-[#616161]">
        <Row className="margin-auto relative">
          <Col
            xs={12}
            md={5}
            className="relative grid sm:justify-center md:justify-start"
          >
            <div className="sm:px-8 md:px-20 mt-11">
              <img
                src="../../public/assets/images/logo.png"
                alt="owais logo"
                className="sm:w-[100px] md:w-[116px]"
              />
              <h2 className="text-white sm:text-[1rem] md:text-[1.5rem] mt-4">
                تعطيك فرصة
              </h2>
              <div className="flex gap-3 mt-4 ml-[-2em]">
                <img
                  src="../../public/assets/images/social1.png"
                  alt="owais-social"
                  className="w-[40px]"
                />
                <img
                  src="../../public/assets/images/social2.png"
                  alt="owais-social"
                  className="w-[40px]"
                />
                <img
                  src="../../public/assets/images/social3.png"
                  alt="owais-social"
                  className="w-[40px]"
                />
                <img
                  src="../../public/assets/images/social3.png"
                  alt="owais-social"
                  className="w-[40px]"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={7} className="mt-11">
            <Row className="margin-auto ">
              <Col xs={6} md={4} className="flex justify-center mb-12">
                <div className="text-end">
                  <h5 className="text-white sm:text-[1rem] md:text-[1.3rem]">
                    المستثمرين
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    البدء
                  </h5>
                </div>
              </Col>
              <Col xs={6} md={4} className="grid justify-center">
                <div className="text-end">
                  <h5 className="text-white sm:text-[1rem] md:text-[1.3rem]">
                    اصدار الصكوك
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    رسوم اصدار الصكوك
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    رسوم الوكالة
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    إرشادات اصدار ادوات الدين
                  </h5>
                </div>
                <div className="text-end mt-16">
                  <h5 className="text-white sm:text-[1rem] md:text-[1.3rem]">
                    الشروط والأحكام
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    شروط اصدر الصكوك
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    شروط رسوم الوكالة
                  </h5>
                </div>
              </Col>
              <Col
                xs={6}
                md={4}
                className="grid sm:justify-end md:justify-start"
              >
                <div className="text-end">
                  <h5 className="text-white sm:text-[1rem] md:text-[1.3rem]">
                    آويس المالية تعطيك فرصة
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    حول آويس المالية
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    الوظائف
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    شركاؤنا
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    صحافة
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    تواصل معنا
                  </h5>
                </div>
                <div className="text-end mt-16">
                  <h5 className="text-white sm:text-[1rem] md:text-[1.3rem]">
                    المزيد من المعلومات
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    استثمارات ممولة بنجاح
                  </h5>
                  <h5 className="text-[#ffffffd0] sm:text-[0.8rem] md:text-[1rem] mt-3">
                    أسئلة رواد الأعمال الشائعة
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
          <div className="absolute sm:bottom-[-2em] md:bottom-6 left-16  sm:w-[50%] md:w-[20%]">
            <h4 className="text-white text-[1em] top-4">
              All rights reserved , 2023{" "}
            </h4>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Footer;
