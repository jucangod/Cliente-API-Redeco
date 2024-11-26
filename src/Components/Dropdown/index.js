import React from 'react';

function CustomDropdown({ id, className, options, onChange, value, placeholder }) {
    return (
        <select
            id={id}
            className={className}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export { CustomDropdown };