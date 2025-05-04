import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' md:h-[60px] border flex justify-between px-6 items-center bg-gradient-to-r from-gray-900 to-slate-900 text-white py-2'>
            <h1 className='font-extrabold font-serif text-xl'>#HustLify</h1>
            <ul className='flex  gap-x-6'>
                <li><Link to={`login`}>Login</Link></li>
                <li><Link to={`register`}>Sign Up</Link></li>
                <li><Link to={`chat`}>Chat</Link></li>
            </ul>
        </div>
    )
}

export default Navbar