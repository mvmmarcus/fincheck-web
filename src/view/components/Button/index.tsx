import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";
import { Spinner } from "../Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        `flex justify-center items-center bg-teal-900 hover:bg-teal-800  text-white px-6 h-12 rounded-2xl font-medium
      disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all`,
        className
      )}
    >
      {isLoading ? <Spinner className="w-6 h-6" /> : children}
    </button>
  );
}
