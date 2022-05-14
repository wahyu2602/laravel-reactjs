import React, { useEffect, useRef } from 'react';

export default function Textarea({
  type = 'text',
  name,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
  rows
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <textarea
        type={type}
        name={name}
        value={value}
        className={
          `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
          className
        }
        ref={input}
        rows={rows}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
}
