import React from "react";

const Experience = () => {
  return (
    <div className="mt-7 mx-5 w-[500px] h-[300px] ">
      <h1 className="text-[#F2DAC2] text-5xl font-bold ">THE BARBERSHOP</h1>
      <h2 className="text-[#977656] mt-2 text-4xl font-semibold">
        Expert Haircuts and Grooming Services
      </h2>
      <p className="text-[#F2DAC2] mt-3 font-light">
        At The Finest Barbershop, we offer a wide range of professional hair
        cutting and grooming services for men. Our experienced barbers use the
        latest techniques and tools to give you the perfect look. Whether you're
        in need of a classic haircut, straight razor shave, or beard trim, we've
        got you covered.
      </p>
      <div className="flex gap-5 mt-5 p-2">
        <button className="hover:bg-[#977656] text-[#F2DAC2] p-3 border-[1px] border-[#977656] hover:-translate-y-1 duration-200">
          LOOK A HAIRCUT
        </button>
        <button className="hover:bg-[#977656] text-[#F2DAC2] p-3 border-[1px] border-[#977656] hover:-translate-y-1 duration-200">
          START SHOPPING
        </button>
      </div>
      <ul className="flex gap-5 mx-5 text-3xl mt-5 ">
        <li>
          <i className="bx bxl-instagram bg-[#977656] text-[#F2DAC2] rounded-full p-2 hover:-translate-y-1 duration-200 hover:cursor-pointer"></i>
        </li>
        <li>
          <i className="bx bxl-github bg-[#977656] text-[#F2DAC2] rounded-full p-2 hover:-translate-y-1 duration-200 hover:cursor-pointer"></i>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
