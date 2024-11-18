import React from 'react'

const FilmMainVideo = () => {
  return (
    <div>
        <div className='  '>
                <video  className='absolute top-0 left-0 w-full h-[99%] object-cover -z-10' 
                src="https://cdn.pixabay.com/video/2024/03/06/203196-920181430_large.mp4"
                 autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
                

            </div>
    </div>
  )
}

export default FilmMainVideo