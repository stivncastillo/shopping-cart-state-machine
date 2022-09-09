import React from "react";

type Props = {
  name: string;
  qty: number;
  price: number;
  onRemove: () => void;
};

const ResumeItem = ({ name, qty, price, onRemove }: Props) => {
  return (
    <div className="flex flex-row items-center py-4 border-b border-b-slate-200">
      <button
        className="text-white h-5 w-5 rounded-full bg-slate-400 text-xs mr-2"
        onClick={onRemove}
      >
        X
      </button>
      <div className="flex flex-1 flex-row justify-between items-center">
        <span className="text-sm">
          {name} {qty > 1 && `(x${qty})`}
        </span>

        <span className="text-md font-semibold">${price}</span>
      </div>
    </div>
  );
};

export default ResumeItem;
