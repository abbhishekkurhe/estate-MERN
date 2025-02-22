import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-400">Luxe<span className="text-slate-300">State</span></h2>
        <p className="text-gray-400 text-center mt-2">Sign in to continue</p>

        <form className="mt-6">
          {/* Email Input */}
          <div>
            <label className="text-gray-300 block mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="text-gray-300 block mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password & Sign Up Link */}
        <div className="text-center mt-4 text-gray-400">
          <p>
            Dont have an account?{' '}
            <Link to="/signUp" className="text-blue-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
