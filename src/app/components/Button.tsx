import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger'; 
  className?: string; 
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ type, variant = 'primary', className = '', disabled = false, children, onClick }: ButtonProps) => {
  const baseClass = 'px-4 py-2 rounded-lg transition duration-300 ease-in-out transform';
  const variantClass = variant === 'primary'
    ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
    : variant === 'secondary'
    ? 'bg-[#b4b8f5] text-white hover:bg-[#6e6cd8] hover:scale-105'
    : 'bg-[#241b31] text-white hover:bg-[#241b31] hover:scale-105'; 

  const iconClass = 'inline-block transition-transform duration-300 ease-in-out';

  return (
    <button type={type} className={`${baseClass} ${variantClass} ${className}`} disabled={disabled} onClick={onClick}>
      <span className={iconClass}>{children}</span>
    </button>
  );
};