import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { AiOutlineMenu, AiOutlineContacts, AiOutlineLineChart } from "react-icons/ai";
import { useCallback, useState } from "react";
import { useOnClickOutside } from "../../hooks";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((value) => !value), []);
  const drawerRef = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div className="hidden md:w-56 md:flex flex-col gap-5 h-screen bg-gray-200 shadow-md px-4 py-6 fixed top-0 left-0">
        <NavItem active={pathname === "/"} path="/">
          <div className="flex items-center">
            <AiOutlineContacts className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Contacts</span>
          </div>
        </NavItem>
        <NavItem active={pathname === "/dashboard"} path="/dashboard">
          <div className="flex items-center">
            <AiOutlineLineChart className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Graphs &amp; Charts</span>
          </div>
        </NavItem>
      </div>
      <div className="md:hidden h-screen fixed top-0 left-0">
        <div
          className="p-4 md:py-1 md:px-2 m-4 border border-gray-200 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu className="text-gray-700 text-xl" />
        </div>
        {isOpen && (
          <div
            className="absolute flex flex-col gap-5 shadow-md px-4 py-6 w-56 h-screen bg-gray-200 overflow-hidden left-0 top-0 text-sm"
            ref={drawerRef}
          >
            <NavItem active={pathname === "/"} path="/">
              <div className="flex items-center">
                <AiOutlineContacts className="text-gray-700 text-xl mr-2" />
                <span className="text-gray-700">Contacts</span>
              </div>
            </NavItem>
            <NavItem active={pathname === "/dashboard"} path="/dashboard">
              <div className="flex items-center">
                <AiOutlineLineChart className="text-gray-700 text-xl mr-2" />
                <span className="text-gray-700">Graphs &amp; Charts</span>
              </div>
            </NavItem>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

