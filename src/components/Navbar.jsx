import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
    const activeStyle= (({isActive})=>isActive?'text-yellow-400 font-bold font-serif':'font-light font-mono')
    return (
        <div className=' md:h-[60px] border border-gray-600 flex justify-between px-6 items-center bg-gradient-to-r from-gray-900 to-slate-900 text-white py-2'>
            <h1 className='font-extrabold font-serif text-xl'> <Link to={`/`}>#HustLify</Link></h1>
            <ul className='flex  gap-x-6'>
                <li><NavLink className={activeStyle} to={`login`}>Login</NavLink></li>
                <li><NavLink className={activeStyle} to={`register`}>Sign Up</NavLink></li>
                <li><NavLink className={activeStyle} to={`order`}>Orders</NavLink></li>
                <li><NavLink className={activeStyle} to={`chat`}>Chat</NavLink></li>
                <li><NavLink className={activeStyle} to={`profile`}><FaUser size={18}/></NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar