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
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('http://search.spoonflower.com/searchv2/designs')
      .then(response => response.json())
      .then(data => {
        this.setState({products: data.results })
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  handleSearch(products) {
    this.setState({ products })
  }

  handleSelection(newState) {
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
          handleSelection={this.handleSelection}
          sorting={this.state.sorting}
          availability={this.state.availability}
          limit={this.state.limit}
           />
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
