import React, { Component } from "react";

import store from "../../redux/store";

import { createIncrementAction } from "../../redux/count_action";

export default class ReduxCount extends Component {
	state = {
		count: store.getState()
	};

	changeCount = num => {
		store.dispatch(createIncrementAction(num));
		this.setState({
			count: store.getState()
		});
	};

	incrementOdd = () => {
		const count = store.getState();
		if (count % 2 !== 0) {
			store.dispatch(createIncrementAction(1));
			this.setState({
				count: store.getState()
			});
		}
	};

	asyncIncrement = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			store.dispatch(createIncrementAction(10));
			this.setState({
				count: store.getState()
			});
		}, 500);
	};

	render() {
		return (
			<div>
				<h2>当前求和的值为：{store.getState()}</h2>
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
