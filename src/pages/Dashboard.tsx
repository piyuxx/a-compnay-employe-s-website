import {
  CountryCasesMap,
  HistoricalCases,
} from "../components/Dashboard";

const Dashboard = () => {
  return (
    <div className="w-[88%] mx-auto">
      <HistoricalCases/>
      <CountryCasesMap />
    </div>
  );
};

export default Dashboard;
