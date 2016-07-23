import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SetPersonalData from '../../../actions/SetPersonalData'

class FullNameInput extends Component {
  render() {
    let checkErrors = ((this.props.state.status == 'ERROR') ? 'form-group__span--visible' : 'form-group__span--unvisible')
    return (
      <div className='form-group'>
        <span className={checkErrors}>cannot be empty</span>
        <input
          type='text'
          placeholder='Full Name'
          onChange={this.props.action.typingName}
          value={this.props.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    state: (state.shipping.fullName)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(SetPersonalData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullNameInput)