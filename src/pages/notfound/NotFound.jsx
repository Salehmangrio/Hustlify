import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { animateFromTo } from '../../utils/animation';

const NotFound = () => {

  useGSAP(() => {
      animateFromTo('#not-found')
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#000000] flex flex-col items-center justify-center text-center px-6">
      <div id='not-found' className="rounded-2xl shadow-2xl bg-[#0f172a] border-none text-white mt-4 p-8 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-16 w-16 hover:text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="min-w-[200] px-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-2 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          <Link
            to="/"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
