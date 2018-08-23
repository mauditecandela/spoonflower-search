import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const products = this.props.products.map((product) => {
      return (
        <div key={product.id}>
          <div className="product-name">{product.name}</div>
        </div>
      )
    })
    return (
      <div>
        {products}
      </div>
    )
  }
}

export default ProductList;
