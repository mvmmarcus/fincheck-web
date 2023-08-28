import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          placeholder=""
          className={cn(
            `w-full bg-white rounded-lg border border-gray-400 px-3 h-[52px] text-gray-800 
            pt-4 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none`,
            error && "border-red-900",
            className
          )}
        />

        <label
          className="absolute text-xs left-3 top-2 pointer-events-none text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5"
          htmlFor={inputId}
        >
          {placeholder}
        </label>

        {!!error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

// forwardRef não consegue entender o nome do componente
Input.displayName = "Input";
