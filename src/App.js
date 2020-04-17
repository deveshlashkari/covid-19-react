/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Covid from "./images/covid-updated.png";

import { fetchData } from "./api";

class App extends React.Component {
  //No constructor cause it autoamtically creates in backend
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //destructure the state to pass it to components
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={Covid} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
