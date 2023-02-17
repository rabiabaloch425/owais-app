const Input = () => {
  return (
    <>
      <div className="flex justify-end">
        <span className="relative">
          <input
            type="text"
            value="الماجدية"
            className="border-[#03989E]  md:w-[800px] sm:[2000px] sm:rounded-[5px] md:rounded-[15px] px-4 !bg-white focus:outline-none border-[1px] sm:h-[30px] md:h-[50px]  text-[#77838F]"
          />
          <img
            src="assets/images/square.png"
            alt="owais square"
            className="absolute sm:left-[5px] md:left-[15px] sm:!top-[5px] md:!top-[10px] sm:w-[20px] md:w-[30px]"
          />
        </span>
      </div>
    </>
  );
};

export default Input;
