import React, { Component } from "react";
import Info from "./components/ipInfo";
import Search from "./components/searchBar";
i
class Home extends Component {
  state = {
    ip: "",
  };

  async componentDidMount(){
    const{data}
  }

  handleSearch = () => {};
  render() {
    return (
      <div id="main">
        <h1 id="title">IP Address Tracker</h1>
        <Search handleSearch={this.handleSearch} />
        <Info />
      </div>
    );
  }
}

export default Home;
