import { NavLink } from "react-router-dom";

type TProps = {
  children: React.ReactNode;
  path: string;
  active: boolean;
};

const NavItem: React.FC<TProps> = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      className="text-lg font-semibold text-neutral-500 hover:text-neutral-700"
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
