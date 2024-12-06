import React from 'react';

const CustomInput = React.forwardRef(({ type, placeholder, className, onChange, maxLength, value }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            ref={ref}
            value={value}
            maxLength={maxLength} 
        />
    );
});

export { CustomInput };