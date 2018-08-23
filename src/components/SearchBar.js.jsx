import React, { Component } from 'react';

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
      <div>
        <input ref={(input) => this.searchQuery = input} />
        <button onClick={this.handleClick.bind(this)}>Search</button>
      </div>
    )
  }
}
export default SearchBar;
