import React, { Component } from 'react';

import Dropdown from './Dropdown.js.jsx';

import '../styles/SearchBar.css';

class SearchBar extends Component {
  componentWillMount() {
    this.handleSearch = this.props.handleSearch;
  }

  handleClick(event) {
    let url = `http://search.spoonflower.com/searchv2/designs?q=${this.searchQuery.value}&sort=${this.props.sorting}&availability=${this.props.availability}`
    console.log(url);
    fetch(url)
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

        <Dropdown id="sorting_options"
          options={this.props.availableSortings}
          title="Sort by"
          handleSelection={this.props.handleSelection}
          type="sorting" />

        <Dropdown id="availability_options"
          options={this.props.availabilityOptions}
          title="Availability"
          handleSelection={this.props.handleSelection}
          type="availability" />

        <button onClick={this.handleClick.bind(this)} className="search-button">Search</button>
      </div>
    )
  }
}
export default SearchBar;
