import { useState } from "react";
import "../../App.css";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "../../Data";
import  Doughnut  from "./Doughnut";

function Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  

  return (
    <div className="App">
      <div className="chart1">
      <div style={{ width: 500 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
      
      </div>
      <div className="chart2">
      <div style={{ width: 300 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 300 }}>
        <Doughnut chartData={userData} />
      </div>
      </div>
    </div>
  );
}

export default Chart;