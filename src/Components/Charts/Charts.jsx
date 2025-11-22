import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  plugins,
  defaults,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from "../../Data/ChartData";
import { display, maxWidth, width } from "@mui/system";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = chartData;

// defaults.maintainAspectRatio = false;

const Charts = () => {
  const options = {
    // responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Activity Graph",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="flex lg:flex-row flex-col items-center gap-6">
      <div className="lg:w-1/2 w-full">
        <Doughnut options={options} data={data} />
      </div>

      <div className="w-full flex flex-col gap-2">
        {data.labels.map((item, index) => (
          <p
            className="py-2 px-4 rounded-lg"
            style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
          >
            {item} - {data.datasets[0].data[index]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Charts;
