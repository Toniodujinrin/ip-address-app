import React, { Component } from "react";
import Info from "./components/ipInfo";
import Search from "./components/searchBar";
import axios from "axios";

class Home extends Component {
  state = {
    ip: "",
    data: {},
  };

  async componentDidUpdate(pP, pS, sS) {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_atr3fj0XwgmeyPehNlOCmFFQ1GG6o&ipAddress=${this.state.ip}`
    );
    if (this.state.data !== pS.data) {
      this.setState({ data });
    } else console.log(data);
  }

  handleSearch = (value) => {
    this.setState({ ip: value });
  };
  render() {
    return (
      <div id="main">
        <h1 id="title">IP Address Tracker</h1>
        <Search handleSearch={this.handleSearch} />
        <Info data={this.state.data} />
      </div>
    );
  }
}

export default Home;
