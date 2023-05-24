type TProps = {
  children: React.ReactNode;
};

const GraphContainer: React.FC<TProps> = ({ children }) => {
  return (
    <div className="p-4 border border-neutral-300 shadow rounded-md my-5">
      {children}
    </div>
  );
};

export default GraphContainer;
