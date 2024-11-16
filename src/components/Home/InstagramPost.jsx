import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/media/image-asset.jpeg'


const InstragramPost = () => {
  return (
    <>
        <div className='text-center text-[#D1AE6B] font-bold text-5xl capitalize font-myFont'>follow along on instagram</div>
        <div className='p-9 flex flex-wrap gap-1 justify-center'>
            
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
            <div className=' w-44 h-44 overflow-hidden'>
            <Link to="https://www.instagram.com/theweddyfilmer/?__pwa=1">
            <img className='w-full h-full object-cover' src={image1} alt="instagram post" />
            </Link>
            </div>
       
        </div>
    </>
  )
}

export default InstragramPost