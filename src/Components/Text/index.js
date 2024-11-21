import React, { Children } from 'react'

function CustomText({ id, className, children, onClick }) {
    return (
        <p
            id={id}
            className={className}
            onClick={onClick}
        >
            {children}
        </p> 
    )
}

export { CustomText }