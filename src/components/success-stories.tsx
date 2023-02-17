import SuccessCarousel from "./success-carousel";

const SuccessStories = () => {
  return (
    <>
      <div className="flex justify-center mt-10 mb-12">
        <h1 className="text-[1.7em] text-[#03989E] bg-[#03999e0e] px-16 py-3 rounded-[20px]  ">
          قصص نجاح
        </h1>
      </div>
      <div className=" mt-10 mb-12">
        <SuccessCarousel />
      </div>
    </>
  );
};

export default SuccessStories;
