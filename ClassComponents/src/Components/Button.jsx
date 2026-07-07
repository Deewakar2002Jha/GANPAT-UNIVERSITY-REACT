import React from 'react'


export const Button = ({ text, bg }) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-5">
            <button className={`px-6 py-3 ${bg} text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300`}>
                {text}
            </button>
        </div>
    )
}




