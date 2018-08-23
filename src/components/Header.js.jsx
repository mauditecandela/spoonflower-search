import React, { Component } from 'react';

import '../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="https://d3u3xhd9tobx8a.cloudfront.net/static/global/spoonflower_logo.svg" className="spoonflower-logo"></img>
        <h1>Custom printed fabric and more</h1>
      </div>
    )
  }
}
export default Header;
