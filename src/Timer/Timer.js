import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: 5,
			isOn: false
		}
	}
	componentDidMount = () => {
		console.log(this)
	}

	startTimer = () => {
		console.log(this)
		this.timer = setInterval(() => {
			this.setState({
				isOn: true,
				timeLeft: this.state.timeLeft - 1
			})
			if (this.state.timeLeft <= 0) {
				clearInterval(this.timer);
				alert("timer ended")
			}
		}, 1000);
		
	}

	pauseTimer = () => {
		clearInterval(this.timer)
	}

	resetTimer = () => {
		clearInterval(this.timer)
		this.setState({
			isOn: false,
			timeLeft: 1500
		})
	}


	render() {

		//let timeLeft = this.state.timeLeft;
		
		return (
			<div className="TimerContainer">
				<p className="TimerText">{this.state.timeLeft}</p>
				<div className="ButtonContainer">

					<button onClick={this.startTimer}>
						<div className="PlayIcon"></div>
					</button>

					<button className="PauseButton" onClick={this.pauseTimer}>
						<div className="PauseIcon"></div>
					</button>

					<button onClick={this.resetTimer}>
						<div className="StopIcon"></div>
					</button>
					
				</div>
			</div>
		);
	}
}

export default Timer;