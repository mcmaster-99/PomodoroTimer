import React, {Component} from 'react';
import SessionTime from '../SessionTime/SessionTime';
import './Timer.css';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: 1500,
			isOn: false
		}
	}
	componentDidMount = () => {
		console.log("Timer Component mounted")
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

	increment = (prevState, props) => {
		// calculate incremented value
		let decNum = this.state.timeLeft += 300
		this.setState({
			time: decNum
		})
	}

	decrement = (prevState) => {
		// calculate decremented value
		let incNum = this.state.timeLeft -= 300
		this.setState({
			time: incNum
		})
	}


	render() {

		//let timeLeft = this.state.timeLeft;
		
		return (
			<div className="TimerContainer">

				<SessionTime increment={this.increment} decrement={this.decrement}/>

				<p className="TimerText">{this.state.timeLeft}</p>
				<div className="ButtonContainer">

					<button className="PlayButton" onClick={this.startTimer}>
						<div className="PlayIcon"></div>
					</button>

					<button className="PauseButton" onClick={this.pauseTimer}>
						<div className="PauseIcon"></div>
					</button>

					<button className="StopButton" onClick={this.resetTimer}>
						<div className="StopIcon"></div>
					</button>

				</div>
			</div>
		);
	}
}

export default Timer;