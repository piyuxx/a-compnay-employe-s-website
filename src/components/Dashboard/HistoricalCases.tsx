import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
} from "recharts";
import { GraphWrapper } from "../commmon";
import { useDashboard } from "../../hooks";

const HistoricalCases: React.FC = () => {
  const { historicalCases, historicalCasesLoading } = useDashboard();

  const data =
    historicalCases &&
    Object.keys(historicalCases.cases).map((date) => ({
      date,
      deaths: historicalCases.deaths[date],
      cases: historicalCases.cases[date],
      recovered: historicalCases.recovered[date],
    }));

  if (historicalCasesLoading) return null;

  return (
    <GraphWrapper>
      <h2 className="text-center text-xl font-semibold mb-2 cursor-pointer hover:text-blue-700">
        Historical Cases
      </h2>
      <LineChart
        width={1024}
        height={480}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
        <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
        <Line type="monotone" dataKey="recovered" stroke="#ffc658" />
      </LineChart>
    </GraphWrapper>
  );
};

export default HistoricalCases;
