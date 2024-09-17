import React from 'react'

const DefaultInput = ({label, type, placeholder, style, name}) => {
    return (
        <div className={style}>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                name={name}
            />
        </div>
    )
}

export default DefaultInput
