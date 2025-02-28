import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="my-16 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 pt-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 pb-8 tracking-wide">Profile</h1>

        <form className="flex flex-col items-center w-full space-y-5">
          <img
            src={currentUser?.avatar}
            alt="profile"
            className="rounded-full h-28 w-28 object-cover cursor-pointer border-4 border-gray-300 shadow-md transition-transform duration-300 hover:scale-110 hover:border-blue-500"
          />

          <input
            type="text"
            placeholder="Username"
            id="username"
            className="border border-gray-300 p-4 text-lg w-full rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 shadow-sm"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border border-gray-300 p-4 text-lg w-full rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border border-gray-300 p-4 text-lg w-full rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 shadow-sm"
          />

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-lg uppercase font-semibold tracking-wide shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300 disabled:scale-95">
            Update
          </button>
        </form>

        <div className='flex justify-between mt-5'>
          <span className='text-red-700 cursor-pointer'>Delete Account</span>
          <span className='text-red-700 cursor-pointer'>SignOut</span>
        </div>
      </div>
    </div>
  );
}
