import React, { Component } from 'react';

import Header from './components/Header.js.jsx';
import ProductList from './components/ProductList.js.jsx';
import SearchBar from './components/SearchBar.js.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      sorting: '',
      availability: '',
      limit: '',
      sortingOptions: ['classic', 'freshtastic', 'relevant'],
      availabilityOptions: ['for_sale', 'not_for_sale', 'all'],
      limitOptions: [50, 100, 150, 200]
    }
    this.performSearch = this.performSearch.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount() {
    this.performSearch('http://search.spoonflower.com/searchv2/designs');
  }

  performSearch(url){
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let newState = {};
        newState["products"] = data.results;
        this.handleRequest(newState);
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  handleRequest(newState) {
      this.setState(newState)
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleSearch={this.handleSearch}
          sortingOptions={this.state.sortingOptions}
          availabilityOptions={this.state.availabilityOptions}
          limitOptions={this.state.limitOptions}
          sorting={this.state.sorting}
          availability={this.state.availability}
          limit={this.state.limit}
          handleRequest={this.handleRequest}
          performSearch={this.performSearch}
           />
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
