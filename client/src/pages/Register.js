import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-800">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-md p-8 text-center text-white">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/logo.png"
            alt="S Healing Project Logo"
            className="h-20 w-20 mb-3"
          />
          <h1 className="text-xl font-bold">S Healing Project</h1>
          <p className="text-sm text-gray-300 italic">
            A Journey to Wellness & Restoration
          </p>
        </div>

        {/* Welcome Message */}
        <h2 className="text-lg font-semibold mb-6">
          Create Your Account – Begin your healing journey
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div className="text-left">
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray-400 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-sm text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Sign In
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="px-4 text-gray-300 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        {/* Social Sign Up */}
        <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/20 border border-gray-400 rounded-lg hover:border-yellow-400 transition">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/20 border border-gray-400 rounded-lg hover:border-yellow-400 transition">
            <FaFacebook /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
