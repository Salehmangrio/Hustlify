import React from 'react'

const LoginWith = ({ Icon, title }) => {
    return (
        <button className="flex items-center gap-2 justify-center text-white border border-gray-600 py-2 rounded-lg hover:text-indigo-400 transition">
            <Icon size={20} /> {title}
        </button>
    )
}

export default LoginWith