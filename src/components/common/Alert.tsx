import React from "react";

type Props = {
  children: React.ReactNode;
};

const Alert = ({ children }: Props) => {
  return (
    <div
      className="p-4 text-sm text-indigo-700 bg-indigo-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
