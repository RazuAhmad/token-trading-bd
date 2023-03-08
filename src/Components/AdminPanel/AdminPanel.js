import React from 'react'

function AdminPanel() {
  return (
    <div className="dashboard-container mt-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Total Users</h2>
            <p className="text-2xl font-bold text-gray-900">1000</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Total Orders</h2>
            <p className="text-2xl font-bold text-gray-900">500</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Total Revenue</h2>
            <p className="text-2xl font-bold text-gray-900">$10,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel