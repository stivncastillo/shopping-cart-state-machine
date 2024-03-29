import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, error, ...props }: Props, ref) => {
    return (
      <div className="mb-2">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props}
        />

        {error && (
          <p id="helper-text-explanation" className="mt-2 text-sm text-red-600">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;
