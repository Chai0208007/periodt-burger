import React from 'react';

export const Card = ({ children, className = '' }) => (
    <div className={`rounded-3xl border bg-white shadow-sm overflow-hidden ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = '' }) => (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
        {children}
    </div>
);

export const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-2xl font-bold leading-none tracking-tight ${className}`}>
        {children}
    </h3>
);

export const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);