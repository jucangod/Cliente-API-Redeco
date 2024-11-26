import React from 'react';

function CustomRadioGroup({ id, className, options, name, onChange, selectedValue }) {
    return (
        <div id={id} className={className}>
            {options.map((option) => (
                <label key={option.value} className="radio-label">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className="radio-input"
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export { CustomRadioGroup };