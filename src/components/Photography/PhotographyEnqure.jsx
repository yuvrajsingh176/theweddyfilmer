import React from 'react'

const PhotographyEnqure = () => {
  return (
    <div>  <div className=" relative flex justify-center items-center enquireCard w-full h-[600px] mt-6 overflow-hidden">
    <img className="w-full object-cover" 
    src= "https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_960_720.jpg"
    alt="image" />
    <div className='absolute flex flex-col gap-6 justify-center items-center '>

    <p className='text-white text-4xl uppercase font-bold shadow-2xl '>Ready to create memories of your Lifetime</p>
    <button className="  bg-transparent border-2 p-6 text-xl uppercase text-white font-bold border-white hover:bg-white hover:text-black">
      Enquire with us
    </button>
    </div>
  </div></div>
  )
}

export default PhotographyEnqure