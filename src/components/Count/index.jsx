import React, { Component } from "react";

export default class Count extends Component {
	state = { count: 0 };

	changeCount = num => {
		this.setState({
			count: this.state.count + num
		});
	};

	incrementOdd = () => {
		const { count } = this.state;
		if (count % 2 !== 0) {
			this.setState({
				count: this.state.count + 1
			});
		}
	};

	asyncIncrement = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.setState({
				count: this.state.count + 3
			});
		}, 500);
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<h2>当前求和的值为：{count}</h2>
				&nbsp; <button onClick={() => this.changeCount(1)}>+1</button> &nbsp;
				<button onClick={() => this.changeCount(2)}>+2</button> &nbsp;
				<button onClick={() => this.changeCount(3)}>+3</button> &nbsp; <br /> <br />
				&nbsp; <button onClick={() => this.changeCount(-1)}>-1</button> &nbsp;
				<button onClick={() => this.changeCount(-2)}>-2</button> &nbsp;
				<button onClick={() => this.changeCount(-3)}>-3</button> &nbsp; &nbsp;
				<button onClick={this.incrementOdd}>奇数相加</button>
				&nbsp; &nbsp;<button onClick={this.asyncIncrement}>异步相加</button>
			</div>
		);
	}
}
