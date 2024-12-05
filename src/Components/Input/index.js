import React from 'react';

const CustomInput = React.forwardRef(({ type, placeholder, className, onChange, maxLength }, ref) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            ref={ref}
            maxLength={maxLength} 
        />
    );
});

export { CustomInput };