import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        id={inputId}
        name={name}
        placeholder=""
        className="w-full bg-white rounded-lg border border-gray-400 px-3 h-[52px] 
        text-gray-800 pt-4 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none"
      />
      <label
        className="absolute text-xs left-3 top-2 pointer-events-none text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5"
        htmlFor={inputId}
      >
        {placeholder}
      </label>
    </div>
  );
}
