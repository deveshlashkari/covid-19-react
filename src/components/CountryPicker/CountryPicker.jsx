import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import Styles from "./CountryPicker.module.css";

import StatesTable from "../StatesTable/StatesTable";

import { fetchCountriesList } from "../../api";

const CountryPicker = ({ handleCountryChange, countryName }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await fetchCountriesList());
    };
    fetchCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={Styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        {countryName === "India" ? (
          <StatesTable countryName={countryName} />
        ) : (
          ""
        )}
      </div>
    </FormControl>
  );
};

export default CountryPicker;
