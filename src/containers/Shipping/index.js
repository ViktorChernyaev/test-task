import React, { Component } from 'react'

export default class Shipping extends Component {
  render() {
    return(
      <form>
        <h2>Shipping Info</h2>
        <div className='input-group'>
          <span className='input-group__title'>Recipient</span>
          <input type='text' placeholder='Full Name' className='input-group__item' />
          <input type='email' placeholder='Email Address' className='input-group__item' />
        </div>
        <div className='input-group'>
          <span className='input-group__title'>Billing Address</span>
          <input type='text' placeholder='Street Address' className='input-group__item' />
          <input type='text' placeholder='Apt, Suite, Bldg, Gate Code. (optional)' className='input-group__item' />
          <input type='text' placeholder='City' className='input-group__item' />
          <input type='text' placeholder='Country' className='input-group__item' />
          <input type='text' placeholder='ZIP' className='input-group__item' />
        </div>
        <button className='submit-btn'>Continue</button>
      </form>
    )
  }
}