import React, { Component } from 'react';


class Prebaruvac extends Component {
	constructor(props) {
		super(props);

		this.state = { termin: '' };
	}

	render() {
		return (
			<div className="prebaruvac">
				<input 
				value={this.state.termin}
				onChange={nastan => this.naPromenaInput(nastan.target.value)} />
			</div>
		);
	}

	naPromenaInput(termin){
		this.setState({termin});
		this.props.naPromenaTermin(termin);
	}
}

export default Prebaruvac;