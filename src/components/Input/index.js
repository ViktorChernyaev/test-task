import React, { Component } from 'react'

export default class extends Component {
	render() {
		return (
			<div>
				<span style={{display: 'none'}}>error</span>
				<input {...this.props} />
			</div>
		)
	}
}