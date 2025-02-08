import React from 'react';

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-400">
          Contact <span className="text-slate-300">Us</span>
        </h2>
        <p className="text-gray-400 text-center mt-2">
          We'd love to hear from you!
        </p>

        <form className="mt-6">
          {/* Name Input */}
          <div>
            <label className="text-gray-300 block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="text-gray-300 block mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <label className="text-gray-300 block mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
