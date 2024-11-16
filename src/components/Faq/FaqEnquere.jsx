import React from "react";

const FaqEnquere = () => {
  return (
    <div>
      <div className=" relative flex justify-center items-center enquireCard w-full h-[600px] mt-6 overflow-hidden">
        <img className="w-full object-cover" 
        src="https://cdn.pixabay.com/photo/2023/01/01/05/31/bride-7689627_960_720.jpg" 
        alt="image" />

        <button className=" absolute bg-transparent border-2 p-6 text-xl uppercase text-white font-bold border-white hover:bg-white hover:text-black">
          Enquire with us
        </button>
      </div>
    </div>
  );
};

export default FaqEnquere;
