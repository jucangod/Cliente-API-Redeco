import React from 'react';

const CustomInput = React.forwardRef(({ type, placeholder, className }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            ref={ref} 
        />
    );
});

export { CustomInput };