import { useContext } from "react";
import { DashboardContext } from "../context";

const useDashboard = () => {
  return useContext(DashboardContext);
};

export default useDashboard;
