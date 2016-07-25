import React, { Component } from 'react'
import { Link } from 'react-router'


export default class NavLink extends Component {
  render() {
    return <Link 
      onlyActiveOnIndex={this.props.onlyActiveOnIndex} 
      to={this.props.to} 
      className={this.props.usable}
    >
      {this.props.text}
    </Link>
  }
}