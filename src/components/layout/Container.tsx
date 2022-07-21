type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full px-4 lg:w-4/5 mx-auto">{children}</div>;
};

export default Container;
