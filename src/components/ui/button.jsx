import React from 'react';
export const Button = ({ children, className = '', ...props }) => (
    <button className={`inline-flex items-center justify-center transition-colors disabled:opacity-50 ${className}`} {...props}>
        {children}
    </button>
);