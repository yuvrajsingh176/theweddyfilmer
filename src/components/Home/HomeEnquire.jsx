import React from 'react'
import Image from "../../assets/media/image12.jpg";

const HomeEnquire = () => {
  return (
    <div>
         <div className=" relative flex justify-center items-center enquireCard w-full h-[600px] mt-6 overflow-hidden">
        <img className="w-full object-cover" src={Image} alt="image" />

        <button className=" absolute bg-transparent border-2 p-6 text-xl uppercase text-white font-bold border-white hover:bg-white hover:text-black">
          Enquire with us
        </button>
      </div>
    </div>
  )
}

export default HomeEnquire