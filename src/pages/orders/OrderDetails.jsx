import React from 'react';
import { useParams } from 'react-router-dom';
import { Orders } from '../../utils/orders';

const OrderDetails = () => {
  const {id}=useParams();
 const [order]=Orders.filter(order=>order.id===id)
  
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Order #{order.id}</h2>
          <p className="text-sm text-gray-500">Placed on {order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
          order.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {order.status}
        </span>
      </div>

      {/* Parties Involved */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 border-t pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full uppercase text-3xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            {order.clientImg ? <img className='rounded-full' src={order.clientImg} alt="" /> : order.client[0]}
          </div>
          <div>
            <p className="font-medium">Client</p>
            <p>{order.client}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
            {order.freelancer}
          </div>
          <div>
            <p className="font-medium">Freelancer</p>
            <p>{order.freelancer}</p>
          </div>
        </div>
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">Total Amount</p>
          <p className="text-gray-800 font-semibold">${order.amount}</p>
        </div>
        <div>
          <p className="font-medium">Due Date</p>
          <p className="text-gray-600">{order.dueDate}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-medium text-gray-800 mb-1">Order Description</p>
        <p className="text-gray-600 leading-relaxed">{order.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
          Deliver Work
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm">
          View Files
        </button>
        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md text-sm">
          Contact Client
        </button>
      </div>
    </div>

  );
};

export default OrderDetails;
