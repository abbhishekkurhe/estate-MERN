import React from 'react';

export default function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150" // Placeholder profile image
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />

        {/* User Info */}
        <h2 className="text-2xl font-bold text-white mt-4">John Doe</h2>
        <p className="text-gray-400 text-sm">Real Estate Agent</p>
        <p className="text-gray-400 text-sm">📍 New York, USA</p>

        {/* Contact Info */}
        <div className="mt-4">
          <p className="text-gray-300"><strong>Email:</strong> johndoe@email.com</p>
          <p className="text-gray-300"><strong>Phone:</strong> +1 123 456 7890</p>
        </div>

        {/* About Section */}
        <div className="mt-4 text-gray-400 text-sm">
          <p>
            Passionate real estate agent with 5+ years of experience in helping clients 
            find their dream homes. Dedicated to providing the best service.
          </p>
        </div>

        {/* Edit Profile Button */}
        <button className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
