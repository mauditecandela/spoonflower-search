import React, { Component } from 'react';

import '../styles/Dropdown.css'

class Dropdown extends Component {
  componentWillMount() {
    this.handleSelection = this.props.handleSelection;
  }

  onChange(e){
    this.handleSelection({sorting: e.target.value});
  }

  render() {
    const options = this.props.options.map((option) => {
      return (
        <option key={option} className="option-item" value={option}>{option}</option>
      )
    });
    return (
      <div className="dropdown">{this.props.title}
        <select className="dropdown-select" onChange={this.onChange.bind(this)}>
          {options}
        </select>
      </div>
    )
  }
}
export default Dropdown;
