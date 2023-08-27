import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800  text-white px-6 h-12 rounded-2xl font-medium
       disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
    >
      {children}
    </button>
  );
}
