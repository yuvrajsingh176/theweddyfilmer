import React from 'react'

const PhotographyEnqure = () => {
  return (
    <div>  <div className=" relative flex justify-center items-center enquireCard w-full h-[600px] mt-6 overflow-hidden">
    <img className="w-full object-cover" 
    src= "https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13392.jpg?t=st=1731720864~exp=1731724464~hmac=c418c7992386048c5d32d8ca8e8202a924edbef3430541734c6458222680e797&w=996"
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