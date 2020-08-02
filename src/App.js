import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker, Footer } from "./components";
import { fetchData } from "./api";
//import coronaImage from './images/image.png';
class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async country => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the data
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="covid-19"
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
