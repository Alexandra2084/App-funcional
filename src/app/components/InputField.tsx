import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'textarea';
  required?: boolean;
}

export const InputField = ({ label, value, onChange, type = 'text', required = false }: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e && e.target && e.target.value !== undefined) {
      onChange(e.target.value);
    } else {
      console.error('Event or target is undefined');
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-64 transition duration-300 ease-in-out transform focus:scale-105"
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
          required={required}
        />
      )}
    </div>
  );
};