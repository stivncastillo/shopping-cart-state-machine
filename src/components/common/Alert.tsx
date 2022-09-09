import React from "react";
type typeAlert = "info" | "danger";
type Props = {
  children: React.ReactNode;
  type?: typeAlert;
};

const getColorsClass = (type: typeAlert) => {
  switch (type) {
    case "danger":
      return "text-red-700 bg-red-100";
    default:
      return "text-indigo-700 bg-indigo-100";
  }
};

const Alert = ({ children, type = "info" }: Props) => {
  return (
    <div
      className={`p-4 text-sm rounded-lg ${getColorsClass(type)}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
