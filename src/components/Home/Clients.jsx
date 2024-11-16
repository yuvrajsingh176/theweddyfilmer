import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#f5f0e9] py-12 px-6">
      <h2 className="text-center text-lg font-semibold text-gray-800 mb-8">
        As Featured in
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {/* Add each logo inside the <div> below with appropriate img src */}
        <div>
          <img
            src="/path-to-khush-logo.png"
            alt="Khush Wedding"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-hindustan-times-logo.png"
            alt="Hindustan Times"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-wedding-sutra-logo.png"
            alt="Wedding Sutra"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-wed-me-good-logo.png"
            alt="WedMeGood"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-times-of-india-logo.png"
            alt="The Times of India"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-vogue-logo.png"
            alt="Vogue"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-bollywood-shaadis-logo.png"
            alt="Bollywood Shaadis"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-you-and-i-logo.png"
            alt="You & I"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-indian-express-logo.png"
            alt="The Indian Express"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-filmfare-logo.png"
            alt="Filmfare"
            className="w-24"
          />
        </div>
        <div>
          <img
            src="/path-to-new-york-times-logo.png"
            alt="The New York Times"
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
