import React, { Component } from 'react';

import '../styles/SearchBar.css';

class SearchBar extends Component {
  componentWillMount() {
    this.handleSearch = this.props.handleSearch;
  }

  handleClick(event) {
    fetch(`http://search.spoonflower.com/searchv2/designs?q=${this.searchQuery.value}`)
      .then(response => response.json())
      .then(data => {
        this.handleSearch(data.results);
    })
      .catch(err => console.error(this.props.url, err.toString()));
    }

  render() {
    return (
      <div className="search-bar">
        <input ref={(input) => this.searchQuery = input} className="search-box" />
        <button onClick={this.handleClick.bind(this)} class="search-button">Search</button>
      </div>
    )
  }
}
export default SearchBar;
