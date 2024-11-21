import React, { Children } from 'react'

function CustomText({ id, className, Children }) {
    return (
        <p
            id={id}
            className={className}
        >
            {Children}
        </p> 
    )
}

export { CustomText }