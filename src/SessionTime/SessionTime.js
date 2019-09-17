import React, {Component} from 'react';
import './SessionTime.css';

class SessionTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Session Time"
		}
	}

	componentDidMount = () => {
		console.log("session time component mounted")
	}

	render() {
		return (
			<div className="SessionContainer">
				<p className="SessionText">{this.state.name}</p>
				<button className="decrement" onClick={this.props.decrement}>-5</button>
				<button className="increment" onClick={this.props.increment}>+5</button>
			</div>
		);
	}
}

export default SessionTime;