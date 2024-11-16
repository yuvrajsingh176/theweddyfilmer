import React from 'react'
import Flower from '../../assets/media/flowers.png'

const Summery = () => {
  return (
    <div>
         <div className='m-0' >
              <div className='flex items-center justify-center'>
                <img className='w-[450px] '  src={Flower} alt="Flowers" />
              </div>
              <div className="px-16 list-none flex-col gap-2 justify-center">
                <li className='mt-3'>Over all these years, we’ve been fortunate to capture some timeless moments. Moments that skip a beat & spark a soul. Moments which would forever echo in the realm of magic.</li>
                <li className='mt-3'>This Journey has not been easy, either. We’ve been challenged, we,ve evolved, we’ve been humbled to experience the sheer profoundness of human emotions.</li>
                <li className='mt-3'>We believe everyone has a story to unfold. A story that could make you smile, give you goosebumps, or make you shed some happy tears.</li>
                <li className='mt-3'>As Paulo Coelho once said “ We are travellers on a cosmic journey, stardust, swirling & dancing in the eddies & whirlpools of infinity. Life is eternal. We have stopped for a moment to encounter each other, to meet, to love, to share.This is a precious moment. It has parenthesis in eternity.”</li>
                <li className='mt-3'>Now in this very moment, as you stumbled upon this page, we would like to tell your tale to the world.</li>
                <li className='mt-3'>A tale which will forever be etched in our 2x2 polaroid, a story which makes your heart full for years to come.</li>
              </div>
              <div className='flex items-center justify-center'>
                <img className='w-[450px]'  src={Flower} alt="Flowers" />
              </div>
            </div>
    </div>
  )
}

export default Summery