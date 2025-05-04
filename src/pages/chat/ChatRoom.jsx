import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import { animateFromTo } from '../../utils/animation';
import { useParams } from 'react-router-dom';
import { users } from '../../utils/users';
import allMessages, { myImage } from '../../utils/dummyMessages';
import { nanoid } from '@reduxjs/toolkit';

const ChatRoom = () => {
  const { id } = useParams();
  const [m, setM] = useState('');
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const user = users.find(user => user.id === Number(id));

  useGSAP(() => {
    animateFromTo('#chat-room');
  }, []);

  useEffect(() => {
    // Load initial messages
    const userMessages = allMessages.filter(
      message => message.userId === Number(id) || message.to === Number(id)
    );
    setMessages(userMessages);
  }, [id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!m.trim()) return;

    const newMessage = {
      id: nanoid(),
      userId: 8794660,
      to: Number(id),
      content: m,
      timestamp: new Date().toLocaleString(),
      fromMe: true,
      image: myImage
    };

    setMessages(prev => [...prev, newMessage]);
    setM('');
  };

  return (
    <div className="h-[calc(100vh-60px)] bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] flex justify-center items-center text-white ml-1">
      <div id="chat-room" className="w-full h-full bg-[#0f172a] rounded-2xl shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#1e293b] px-6 py-4 rounded-t-2xl border-b border-gray-700">
          <h2 className="text-lg font-semibold">{user?.name?.toUpperCase()}</h2>
          <p className="text-sm text-green-400">Online</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message =>
            message.fromMe ? (
              <div key={message.id} className="flex items-start justify-end gap-2">
                <div className="bg-indigo-600 text-sm p-3 rounded-xl max-w-xs">
                  {message.content}
                </div>
                <img
                  src={message.image}
                  alt="My avatar"
                  className="rounded-full w-10 h-10"
                />
              </div>
            ) : (
              <div key={message.id} className="flex items-start gap-2">
                <img
                  src={user.avatar}
                  alt="User avatar"
                  className="rounded-full w-10 h-10"
                />
                <div className="bg-gray-800 text-sm p-3 rounded-xl max-w-xs">
                  {message.content}
                </div>
              </div>
            )
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="px-6 py-4 border-t border-gray-700 bg-[#1e293b] rounded-b-2xl">
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              value={m}
              onChange={(e) => setM(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
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
