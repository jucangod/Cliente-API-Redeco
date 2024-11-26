import React from 'react';

function CustomRadioButton({ id, label, value, name, checked, onChange, className }) {
    return (
        <label htmlFor={id} className={`custom-radio-button ${className || ''}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="radio-input"
            />
            <span className="radio-label">{label}</span>
        </label>
    );
}

export { CustomRadioButton };