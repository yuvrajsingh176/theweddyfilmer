import React, { useState } from "react";


const videos = [
    {
      id: "1",
      videoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Karishma & Varun",
      location: "Mumbai, India",
    },
    {
      id: "2",
      videoId: "3JZ_D3ELwOQ", // Replace with your YouTube video ID
      thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
      title: "Nipun & Sammy",
      location: "Turkey",
    },
    {
      id: "3",
      videoId: "ScMzIvxBSi4", // Replace with your YouTube video ID
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
      title: "Huzaifa & Burhan",
      location: "Kashmir, India",
    },
    {
      id: "4",
      videoId: "C0DPdy98e4c", // Replace with your YouTube video ID
      thumbnail: "https://img.youtube.com/vi/C0DPdy98e4c/maxresdefault.jpg",
      title: "Idris & Drashti",
      location: "Bali, Indonesia",
    },
  ];
  

const FilmVIdeoGalary = () => {
    const [playingVideoId, setPlayingVideoId] = useState(null);
  return (
    <div>
      <div className="flex  items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden group"
            >
              {playingVideoId === video.videoId ? (
                <iframe
                  className="w-full h-60 sm:h-72"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-60 sm:h-72 object-cover cursor-pointer"
                  onClick={() => setPlayingVideoId(video.videoId)}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-lg font-bold">{video.title}</h3>
                <p className="text-sm">{video.location}</p>
              </div>
              {!playingVideoId && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white text-black rounded-full p-3"
                    onClick={() => setPlayingVideoId(video.videoId)}
                  >
                    ▶
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmVIdeoGalary;
