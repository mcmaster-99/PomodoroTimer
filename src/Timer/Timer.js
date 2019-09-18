import React, {Component} from 'react';
import SessionTime from '../SessionTime/SessionTime';
import BreakTime from '../BreakTime/BreakTime';
import './Timer.css';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 0,
			seconds: '02',
			isOn: false,
			timeColor: "white",
			status: "in session"
		}
	}
	componentDidMount = () => {
		console.log("Timer Component mounted")
	}

	startTimer = () => {

		this.seconds = setInterval(() => {
			if (this.state.seconds === '00' && this.state.minutes === 0) {
				this.setState({
					timeColor: 'green',
					status: 'on break'
				})
				clearInterval(this.seconds);	
				alert("timer ended")
			}
			// if seconds is 0, reset it to 60 and decrement minutes
			else if (this.state.seconds === '00' && this.state.minutes !== 0){
				this.setState({minutes: this.state.minutes-1, seconds: 59})

			// add 0 in front of single digit seconds
			} else if (this.state.seconds <= 10) {
					this.setState({seconds: '0'+(this.state.seconds - 1)})

			// add 0 in front of single digit minutes
			} else if (this.state.minutes <= 10) {
					this.setState({minutes: '0'+(this.state.minutes - 1)})

			// decrement seconds if none of the conditions above exist
			} else {
				this.setState({seconds: this.state.seconds - 1})
			}
		}, 1000);
		
	}

	pauseTimer = () => {
		clearInterval(this.seconds)
	}

	resetTimer = () => {
		clearInterval(this.seconds)
		this.setState({
			isOn: false,
			minutes: 25,
			seconds: '00'
		})
	}

	increment = (prevState, props) => {
		this.setState({
			minutes: this.state.minutes + 5
		})
	}

	decrement = (prevState) => {
		this.setState({
			minutes: this.state.minutes - 5
		})
	}


	render() {

		console.log(typeof(this.state.timeColor))
		
		return (
			<div className="TimerContainer">

				<SessionTime increment={this.increment} decrement={this.decrement}/>

				<div id="StatusText">You are now {this.state.status}</div>

				<p className="TimerText" style={{color:this.state.timeColor}}>{this.state.minutes}:{this.state.seconds}</p>
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

					<BreakTime />

				</div>
			</div>
		);
	}
}

export default Timer;