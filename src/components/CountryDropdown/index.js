import React, { Component } from 'react'

export default class CountryDropdown extends Component {
  render() {
    return (
      <div className='input-group__item'>
        <span style={{display: 'none'}}>error</span>
        <input {...this.props} />
        <ul>
          
        </ul>
      </div>
    )
  }
}