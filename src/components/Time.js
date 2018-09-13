import React, { Component } from 'react';
import dateformat from 'dateformat';

class Time extends Component {
    state = {
        curTime: null,
	};
	componentDidMount() {
		setInterval( () => {
			this.setState({
				curTime : dateformat(new Date(), "dd mmm HH:MM:ss").toUpperCase()
			})
		}, 1000)
	};	
  	render() {
		return (
			<span>{this.state.curTime}</span>
		);
  	}
}

export default Time;
