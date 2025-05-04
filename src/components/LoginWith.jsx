import React from 'react'

const LoginWith = ({ Icon, title=''}) => {
    return (
        <button className={`flex items-center gap-2 ${title==='' ? 'w-[100px px-4 hover:bg-gray-500':'hover:text-indigo-400'} justify-center text-white border border-gray-600 py-2 rounded-lg  transition`}>
            <Icon size={title===''?22:20} /> {title}
        </button>
    )
}

export default LoginWith