import React, { Component } from 'react';

import '../styles/ProductList.css'

class ProductList extends Component {
  render() {
    const products = this.props.products.map((product) => {
      return (
        <div key={product.id} className="product-polaroid-container">
          <img className="product-image" src={product.thumbnail_url} alt={product.short_description}></img>
          <div className="product-information">
            <div className="product-name">{product.name}</div>
            <div className="product-author">by {product.user.screen_name}</div>
          </div>
        </div>
      )
    })
    return (
      <div className="product-list">
        {products}
      </div>
    )
  }
}

export default ProductList;
