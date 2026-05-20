/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-yellow-400">Bookings</a>
          <a href="#" className="block hover:text-yellow-400">Services</a>
          <a href="#" className="block hover:text-yellow-400">Users</a>
          <a href="#" className="block hover:text-yellow-400">Analytics</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-purple-700 mb-8"
        >
          Welcome to Admin Dashboard
        </motion.h1>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-2">Bookings</h2>
            <p className="text-gray-600">Manage upcoming healing sessions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-2">Services</h2>
            <p className="text-gray-600">Add or update healing services.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;