import React, { Component } from "react";
import Info from "./components/ipInfo";
import Search from "./components/searchBar";
import axios from "axios";
import Maps from "./map";

class Home extends Component {
  state = {
    ip: "",
    data: {},
  };

  async componentDidUpdate(pP, pS, sS) {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_atr3fj0XwgmeyPehNlOCmFFQ1GG6o&ipAddress=${this.state.ip}`
    );
    if (this.state.ip !== pS.ip) {
      this.setState({ data });
    }
  }

  handleSearch = (value) => {
    this.setState({ ip: value });
  };
  render() {
    return (
      <div id="main">
        <div id="search-area">
          <h1 id="title">IP Address Tracker</h1>
          <Search handleSearch={this.handleSearch} />
          <Info data={this.state.data} />
        </div>
        <div id="map-area">
          <Maps />
        </div>
      </div>
    );
  }
}

export default Home;
