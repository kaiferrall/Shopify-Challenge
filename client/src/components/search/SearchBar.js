import React, { Component } from "react";

//components
//functions
import { searchImages } from "../../api/searchImages";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      results: []
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(e) {
    this.setState({ search: e.target.value });
  }
  async submit(e) {
    e.preventDefault();
    let results = await searchImages(this.state.search);
    this.props.setResults(results);
  }
  render() {
    return (
      <div className="flex-row">
        <form onSubmit={this.submit} id="search-bar-container">
          <input
            onChange={this.onChange}
            value={this.state.search}
            type="text"
            placeholder="Search images"
          />
          <div onClick={this.submit} id="search-icon" className="flex-row">
            <i className="fas fa-search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
