import React from 'react'


const HomeShowcaseFilm = () => {
  return (
    <div>
         <div className="videoGallary relative flex items-center justify-center mt-16 mb-16">
        {/* this is the video VideoGallaryv */}

        <video id='weddingVideos' 
        
        src="https://cdn.pixabay.com/video/2016/09/14/5278-182817488_large.mp4"
        autoPlay muted loop />
        <div className=" absolute text-3xl font-myFont text-white">
          Showcashing Films
        </div>
      </div>
    </div>
  )
}

export default HomeShowcaseFilm