// PasswordInput.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

type PasswordInputProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordInput = ({ label, name, placeholder, value, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="space-y-2 w-full relative">
      <label htmlFor={name} className="text-[16px] text-gray-700 block">
        {label}
      </label>
      <div className="relative">
        <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full bg-[#f7f7f7] border-1 border-[#e4e4e7] rounded-sm
            px-10 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
