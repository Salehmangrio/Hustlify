import React from 'react';
import { useGSAP } from "@gsap/react";
import { animateFromTo } from '../../utils/animation';
import { useParams } from 'react-router-dom';
import { users } from '../../utils/users';
import messages from '../../utils/dummyMessages';

const ChatRoom = () => {
  const { id } = useParams()
  const user = users.filter(user => user.id === Number(id))
  const messageList = messages.filter(message => message.userId === Number(id) || message.to === Number(id))

  useGSAP(() => {
    animateFromTo('#chat-room')
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] flex justify-center items-center text-white ml-1">
    <div id='chat-room' className="w-full h-[100vh] bg-[#0f172a] rounded-2xl shadow-xl flex flex-col overflow-hidden">  
        {/* Header */}
        <div className="bg-[#1e293b] px-6 py-4 rounded-t-2xl border-b border-gray-700">
          <h2 className="text-lg font-semibold">Chat with {user[0].name}</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Incoming Message */}
          {
            messageList.map(message => message.fromMe ?
              <div className="flex items-start justify-end gap-2">
                <div className="bg-indigo-600 text-sm p-3 rounded-xl max-w-xs">
                  {message.content}
                </div>
                <img
                  src={message.image}
                  alt="my avatar"
                  className="rounded-full w-10 h-10"
                />
              </div> :
              <div className="flex items-start gap-2">
                <img
                  src={user[0].avatar}
                  alt="avatar"
                  className="rounded-full w-10 h-10"
                />
                <div className="bg-gray-800 text-sm p-3 rounded-xl max-w-xs">
                {message.content}
                </div>
              </div>

            )

          }

          {/* Outgoing Message */}

        </div>

        {/* Input Bar */}
        <div className="px-6 py-4 border-t border-gray-700 bg-[#1e293b] rounded-b-2xl">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type='submit'
              className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
