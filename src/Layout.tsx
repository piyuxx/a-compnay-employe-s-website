import { Sidebar } from "./components/commmon";

type TProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-12">
      <div className="col-span-2 md:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 md:col-span-10">{children}</div>
    </div>
  );
};

export default Layout;
