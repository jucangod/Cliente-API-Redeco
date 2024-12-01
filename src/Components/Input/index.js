import React from 'react';

const CustomInput = React.forwardRef(({ type, placeholder, className, onChange }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            ref={ref} 
        />
    );
});

export { CustomInput };