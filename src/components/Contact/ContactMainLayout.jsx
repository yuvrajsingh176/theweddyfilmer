import React from 'react'

const ContactMainLayout = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full   rounded-lg p-8">
        <h2 className="text-center text-3xl font-semibold mb-4">
          Let us get to know each other better :)
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Please fill in the form below and provide as much detail as possible to help us create an accurate quote.
          <br />
          Please go through our FAQ section to find answers to some common questions.
        </p>
        
        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name <span className="text-red-500">(required)</span></label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">(required)</span></label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone <span className="text-red-500">(required)</span></label>
            <div className="flex gap-4">
              <select className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Nepal</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
              <input
                type="text"
                placeholder="+977"
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Dates */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Dates <span className="text-red-500">(required)</span></label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Venue / Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Venue / Location <span className="text-red-500">(required)</span></label>
            <input
              type="text"
              placeholder="Venue / Location"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Estimated Guest Count */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Estimated Guest Count <span className="text-red-500">(required)</span></label>
            <input
              type="number"
              placeholder="Estimated Guest Count"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Services */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">What services are you looking for?</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Photography
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Film
              </label>
            </div>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tell us your story and short description of the dream wedding.
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Let's do this! :)
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactMainLayout