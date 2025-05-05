import React, { useState } from 'react';
import { Orders } from '../../utils/orders';
import { Link } from 'react-router-dom';

const statusOptions = ['All', 'Active', 'Delivered', 'Completed', 'Cancelled'];

const ActiveOrders = () => {
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredOrders = Orders.filter(order =>
    (filterStatus === 'All' || order.status === filterStatus)
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>

        <div className="flex gap-4 w-full md:w-auto">
          {/* Dropdown Menu */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <p className="text-gray-500">No Orders found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{order.title}</h2>
                <span className="text-sm text-gray-600">{order.dueDate}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Client: {order.client}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">${order.amount}</span>
                <div className="flex gap-2">
                  <button className="text-sm px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Deliver
                  </button>
                  <Link to={`/order/${order.id}`} className="text-sm px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveOrders;
