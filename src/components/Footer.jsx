import React from 'react'
import Logo from '../assets/media/white_logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='footer p-5 bg-orange-200 flex flex-wrap items-center justify-between text-white'>
            <div>
                <li className='uppercase font-bold text-center text-white'>get in touch</li>
                <li className='text-center'>theweddyfilmer@gmail.com</li>
                <li className='text-center'>+977-98000000</li>
                <p className='mt-5 font-bold'><span>Address:</span> Office Kathmandu</p>
            </div>
            <div>
                <div className='grid items-center justify-center'>
                    <img className='flex justify-center' src={Logo} alt="image" />
                    <div className="social flex flex-wrap gap-4 text-3xl justify-center">
                        <Link className='bg-white text-orange-200 p-2 rounded-full ' to="#"><FaFacebookF/></Link>
                        <Link className='bg-white text-orange-200 p-2 rounded-full ' to="#"><FaInstagram/></Link>
                        <Link className='bg-white text-orange-200 p-2 rounded-full ' to="#"><FaYoutube/></Link>
                        
                    </div>
                </div>
            </div>
            <div className='w-96'>
                <p className='text-center'>Tags:Wedding Photography, Wedding Film, Epic Stories, Cinematic Films, Wedding videos, Wedding Cinematographers in India, Wedding Photography, Destination Wedding Photographer, Best Wedding Photographer. </p>
                <div className='text-center mt-10' > All Images and Videos Are Copyrighted © 2024 theweddyfilmer</div>
            </div>
        </div>
    </div>
  )
}

export default Footer