import { ProgressBar } from "react-bootstrap";

const OpportunityCard = () => {
  const now = 50;

  return (
    <>
      <div className="w-[420px] bg-white rounded-[25px] pb-7 ">
        <a href="#" className="relative">
          <img className="rounded-t-lg" src="assets/images/card2.png" alt="" />
          <img
            className="absolute bottom-[1px] w-[80px] right-[40%] translate-y-[40px]"
            src="assets/images/subImg1.png"
            alt=""
          />
        </a>
        <div className="flex justify-between py-[20px] px-[20px]">
          <img
            src="assets/images/square.png"
            alt="owais square"
            className=" w-[40px] h-[40px]"
          />
          <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] mt-1 px-4 h-[35px] py-[1px] rounded-[8px]">
            نشط
          </button>
        </div>
        <div className="text-end  px-[20px]">
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            صندوق الرمز
          </h2>
        </div>
        <div className="text-end pt-[10px] pb-[20px] px-[20px] border-b-[1px solid #bfcad482]">
          <h2 className="text-[#9CA6AF] sm:!text-[.9rem] md:!text-[.9rem]">
            نعمل في الرمز ريزدنس على الإبداع والابتكار في تصاميمنا للوحدات
            السكنية ، فبين الجمال واستثمار المساحات تكمن تصاميم الماجدية ....
          </h2>
        </div>
        <div className="pb-[20px] px-[20px] flex justify-between items-center">
          <button className="text-white bg-[#03989E] border-[1px] border-[#03989E] sm:text-[10px] md:text-[14px] mt-1 px-4 h-[30px] py-[1px] rounded-[8px] ">
            {" "}
            ريال50,500,000
          </button>
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            إجمالي قيمة الطرح
          </h2>
        </div>
        <div className="pb-[20px] px-[20px] flex items-center ">
          <ProgressBar now={now} label={`${now}%`} className="w-full" />
        </div>
        <div className="pb-[10px] px-[35px] flex justify-between items-center">
          <h2 className="text-[#03989E] sm:!text-[.9rem] md:!text-[.9rem]">
            {" "}
            25,200,000 ريال{" "}
          </h2>
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            المبلغ الذي تم جمعه
          </h2>
        </div>
        <div className="pb-[10px] px-[35px] flex justify-between items-center">
          <h2 className="text-[#03989E] sm:!text-[.9rem] md:!text-[.9rem]">
            {" "}
            17.3%{" "}
          </h2>
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            العائد المتوقع
          </h2>
        </div>
        <div className="pb-[10px] px-[35px] flex justify-between items-center">
          <h2 className="text-[#03989E] sm:!text-[.9rem] md:!text-[.9rem]">
            {" "}
            1,000 ريال{" "}
          </h2>
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            سعر الوحدة
          </h2>
        </div>
        <div className="pb-[10px] px-[35px] flex justify-between items-center">
          <h2 className="text-[#03989E] sm:!text-[.9rem] md:!text-[.9rem]">
            {" "}
            22 شهر
          </h2>
          <h2 className="text-[#77838F] sm:!text-[.9rem] md:!text-[.9rem]">
            مدة الصندوق
          </h2>
        </div>
      </div>
    </>
  );
};

export default OpportunityCard;
