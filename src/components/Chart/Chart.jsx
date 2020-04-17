import React, { useState, useEffect } from "react";

import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import Styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#fbc02d",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "#ff5252",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#fbc02d", "#00e676", "#ff5252"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: {
          display: false,
        },
        title: { display: true, text: `Current status of ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={Styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
