import React from 'react';
import { useGSAP } from '@gsap/react';
import { users } from '../../utils/users'
import { animateFromTo } from '../../utils/animation';
import { Outlet, Link } from 'react-router-dom';

const ChatList = () => {

  useGSAP(() => {
    animateFromTo('#chat-list')
  }, []);
  
  return (
    <div className=" flex bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000]">
      <div id='chat-list' className="w-full max-w-md">
        <div className="shadow-2xl bg-[#0f172a] text-white h-[calc(100vh-100px)]">
          <h2 className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
            Chats
          </h2>
          <div className="divide-y divide-gray-700 max-h-[calc(100vh-164px)] pb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
            {users.map(chat => (
              <Link key={chat.id} to={`${chat.id}`}>
                <div
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-800 cursor-pointer transition"
                >
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-white">{chat.name}</h3>
                      <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 truncate max-w-[220px]">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full h-[calc(100vh-60px)]'>
        <Outlet />
      </div>
    </div>
  );
};

export default ChatList;