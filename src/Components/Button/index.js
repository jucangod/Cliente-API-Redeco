import React from 'react'

function CustomButton({ onClick, type, id, className }) {
    return (
        <button 
            onClick={onClick}
            type={type}
            id={id}
            className={className}
        />
    )
}

export { CustomButton }