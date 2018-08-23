import React, { Component } from 'react';

import Header from './components/Header.js.jsx';
import ProductList from './components/ProductList.js.jsx';
import SearchBar from './components/SearchBar.js.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://search.spoonflower.com/searchv2/designs')
      .then(response => response.json())
      .then(data => {
        this.setState({products: data.results })
    })
      .catch(err => console.error(this.props.url, err.toString()));
  }


  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
