import React, {Component} from 'react';
import './WatchBand.css';
import Timer from '../Timer/Timer';
import SessionTime from '../SessionTime/SessionTime';

class WatchBand extends Component {
	render() {
		return (
			<div className="WatchContainer">
				<div className="WatchBandLeftHalf">
				</div>
				<div className="WatchBandWhole">
				</div>
				<div className="WatchBandRightHalf">
				</div>
				<div className="WatchCase">
					<SessionTime/>
					<Timer/>
				</div>
			</div>
		);
	}
}

export default WatchBand;