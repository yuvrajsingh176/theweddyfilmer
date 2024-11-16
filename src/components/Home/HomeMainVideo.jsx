import React from 'react'
import Video from '../../assets/media/video.mp4'

const HomeMainVideo = () => {
  return (
    <div>
         <div className='  '>
                <video  className='absolute top-0 left-0 w-full h-[99%] object-cover -z-10' src={Video} autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
                

            </div>
    </div>
  )
}

export default HomeMainVideo