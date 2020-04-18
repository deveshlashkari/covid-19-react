import axios from "axios";

import Constants from "../Constants/Constants";

//using async await to handle asynchronous calls
export const fetchData = async (country) => {
  let changableUrl = Constants.BASE_URL;

  if (country) {
    changableUrl = `${Constants.BASE_URL}/countries/${country}`;
  }

  try {
    //destructuring of data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${Constants.BASE_URL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesList = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${Constants.BASE_URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchStateData = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(Constants.BASE_URL_INDIA);

    const modifiedStateData = statewise.map((stateData) => ({
      stateName: stateData.state,
      lastUpdate: stateData.lastupdatedtime,
      confirmedCases: stateData.confirmed,
      activeCases: stateData.active,
      recoveredCases: stateData.recovered,
      deaths: stateData.deaths,
    }));
    return modifiedStateData;
  } catch (error) {}
};
