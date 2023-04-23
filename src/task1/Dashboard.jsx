import { useState } from "react";
import "../App.css";

import { UserData } from "../Data";
import Doughnut from "../task4/charts/Doughnut";
import BarChart from "../task4/charts/BarChart";

function Dashboard() {
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
    <div className="dashboard">
      <div className="card">
        <div className="card1">card1</div>
        <div className="card2">card2</div>
        <div className="card3">card3</div>
        <div className="card4">card4</div>
      </div>
      <div className="chart2">
        <div style={{ width: 600 }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 300 }}>
          <Doughnut chartData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
