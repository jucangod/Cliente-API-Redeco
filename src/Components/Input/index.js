import React from 'react'

function CustomInput({ type, placeholder, id, className }) {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            id={id}
            className={className}
        />
    )
}

export { CustomInput }