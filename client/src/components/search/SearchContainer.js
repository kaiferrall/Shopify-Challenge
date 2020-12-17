import React, { Component } from "react";

//components
import SearchHeader from "./SearchHeader";
import SearchBar from "./SearchBar";
import PixaBay from "./PixaBay";
import { SearchResult } from "./SearchResult";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.setResults = this.setResults.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  setResults(results) {
    this.setState({ searchResults: results });
  }
  clearSearch() {
    this.setState({ searchResults: [] });
  }
  render() {
    let { searchResults } = this.state;
    let resultContainer, AboutSite;
    let resultItems = searchResults.map((res, index) => {
      return (
        <SearchResult
          selectedPhotos={this.props.selectedPhotos}
          selectPhoto={this.props.selectPhoto}
          key={index}
          url={res}
          index={index}
        />
      );
    });
    if (resultItems.length > 0) {
      resultContainer = (
        <div id="results-container" className="flex-col">
          <small>Click to select or deselect images</small>
          <button onClick={this.clearSearch} id="clear-btn">
            clear search
          </button>
          {resultItems}
        </div>
      );
    } else {
      AboutSite = <PixaBay />;
    }
    return (
      <div id="search-container" className="flex-col">
        <div className="colapse">
          <button onClick={this.props.hide}>
            <i className="fas fa-bars" />
          </button>
        </div>
        <SearchHeader />
        <div id="search-content" className="flex-col">
          <SearchBar setResults={this.setResults} />
          {resultContainer}
        </div>
        {AboutSite}
      </div>
    );
  }
}

export default SearchContainer;
