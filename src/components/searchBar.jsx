import React, { Component } from "react";
import Input from "./input";
class Search extends Component {
  state = {
    value: "",
  };

  handleChange = ({ currentTarget: input }) => {
    const value = input.value;
    this.setState({ value });
  };
  render() {
    return (
      <div id="search-bar">
        <Input handleChange={this.handleChange} />
        <button
          id="button"
          onClick={() => this.props.handleSearch(this.state.value)}
        >
          {">"}
        </button>
      </div>
    );
  }
}

export default Search;
