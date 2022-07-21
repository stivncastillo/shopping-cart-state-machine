interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface OutlineButtonProps extends ButtonProps {}

export const OutlineButton = ({ children, ...props }: OutlineButtonProps) => {
  return (
    <button
      className="py-2 px-4 border border-indigo-500 dark:border-indigo-300 dark:hover:bg-indigo-500/20 hover:bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 text-sm font-bold uppercase rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold uppercase rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
