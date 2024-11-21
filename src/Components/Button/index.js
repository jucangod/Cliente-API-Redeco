import React from 'react'

function CustomButton({ onClick, type, id, className, children }) {
    return (
        <button 
            onClick={onClick}
            type={type}
            id={id}
            className={className}
        >
           {children} 
        </button> 
            
    )
}

export { CustomButton }