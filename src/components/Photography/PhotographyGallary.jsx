import React from 'react'
import Photo1 from '../../assets/media/karishna_varun.jpg'

const PhotographyGallary = () => {
  return (
    <div>
         <div className="p-5">
      <div className=" flex flex-wrap gap-4 justify-center ">
      {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-gray-100 max-w-lg p-4 rounded-lg shadow-2xl overflow-hidden h-[715px]">
            <img src={Photo1} alt="Image" className="w-full h-96 object-cover rounded-md" />
            <div className="text-center text-2xl mt-4 font-semibold">Krishna & Varun</div>
            <div className="text-center m-2 italic text-sm">Romance in the City</div>
            <div className="text-center text-sm line-clamp-5 px-2">
              We felt it from our hearts when Karishma described Varun as the last piece of the Jigsaw puzzle that made her life complete. In three days, we were fortunate to capture how adorably Varun & Karishma were looking at each other. But what we couldn't capture, were the brimming emotions inside the heart of these two. The feeling of finally living the dream, the anticipation of how life would unfold, and the excitement of finally solving the Jigsaw puzzle. What also couldn't be captured were living some of the most unforgettable days with this duo. All the chaos in getting the shoot done, the unfolding craziness, all the drama which now gets etched in our hearts. We are sure whenever we look back to these days, our heart will be filled with lots of joy and memories which will remain special in our hearts.
            </div>
            <div className="flex items-center justify-center mt-5">
              <button className="border-2 uppercase border-black px-4 py-2 text-sm font-semibold">See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default PhotographyGallary