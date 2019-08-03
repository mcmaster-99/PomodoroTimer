import React, {Component} from 'react';
import './SessionTime.css';

class SessionTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Session Time",
		}
	}

	componentDidMount = () => {
		console.log("session time component mounted")
	}

	/*increment = () => {
		this.state.
	}*/

	render() {
		return (
			<div className="SessionContainer">
				<p>Session Time</p>
				<p className="decrement">-</p>
				<p className="increment">+</p>
			</div>
		);
	}
}

export default SessionTime;