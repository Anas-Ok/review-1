import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    childern?: React.ReactNode;
    label?: string;
    className?: string;
    width?: 'w-full' | 'w-fit';
}

const Button: React.FC<ButtonProps> = ({ label, className,width = 'w-full', childern, ...rest }) => {
    return (
        <button className={`${className} ${width} text-white`} {...rest}>
            {label || childern}
        </button>
    );
};

export default Button;