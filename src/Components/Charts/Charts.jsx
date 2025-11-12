import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from "../../Data/ChartData";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = chartData;

const Charts = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-1/2">
        <Doughnut data={data} />
      </div>

      <div className="w-full flex flex-col gap-2">
        {data.labels.map((item, index) => (
          <p className="batch p-2 rounded-md">
            {item} - {data.datasets.map((d) => d.data[index])}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Charts;
