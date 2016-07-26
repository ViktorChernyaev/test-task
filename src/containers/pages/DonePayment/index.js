import React, { Component } from 'react'

export default class DonePayment extends Component {
  render() {
    return (
      <div>
        <h2 className='form-page__title'>Thank you for your order!</h2>
        <span className='order-number strong--half'>Order number is 188787788</span>
        <p className='order-text'>You will receive an email confirmation shortly to <a href='#' className='order-email'>jonathan.smith@gmail.com</a></p>
        <p className='order-text'>Estimated delivary Day is<br /> <strong>Friday 1st April 2016</strong></p>
        <a href='#' className='order-print'>Print Recepire</a>
      </div>
      )
  }
}