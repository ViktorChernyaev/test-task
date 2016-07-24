import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetCardData from '../../../actions/Payment'

class CardHolderNameInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Name as it appears on your card'
          onChange={this.props.action.typingCardHolder}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.payment.cardHolderName)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetCardData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolderNameInput)