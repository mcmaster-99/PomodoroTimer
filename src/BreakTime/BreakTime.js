import React, {Component} from 'react';
import './BreakTime.css';

class BreakTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Break Time"
		}
	}

	componentDidMount = () => {
		console.log("session time component mounted")
	}

	render() {
		return (
			<div className="BreakContainer">
				<p className="BreakText">{this.state.name}</p>
				<button className="decrement" onClick={this.props.decrement}>-5</button>
				<button className="increment" onClick={this.props.increment}>+5</button>
			</div>
		);
	}
}

export default BreakTime;