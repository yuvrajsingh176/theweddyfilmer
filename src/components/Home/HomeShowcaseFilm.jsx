import React from 'react'
import Video from '../../assets/media/weeding.mp4'

const HomeShowcaseFilm = () => {
  return (
    <div>
         <div className="videoGallary relative flex items-center justify-center mt-16 mb-16">
        {/* this is the video VideoGallaryv */}

        <video id='weddingVideos' src={Video} autoPlay muted loop />
        <div className=" absolute text-3xl font-myFont text-white">
          Showcashing Films
        </div>
      </div>
    </div>
  )
}

export default HomeShowcaseFilm