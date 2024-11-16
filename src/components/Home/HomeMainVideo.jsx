import React from 'react'


const HomeMainVideo = () => {
  return (
    <div>
         <div className='  '>
                <video  className='absolute top-0 left-0 w-full h-[99%] object-cover -z-10' 
                src="https://cdn.pixabay.com/video/2016/09/14/5278-182817488_large.mp4"
                 autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
                

            </div>
    </div>
  )
}

export default HomeMainVideo