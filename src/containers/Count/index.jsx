import React, { Component } from "react";

import { connect } from "react-redux";

import { increment, decrement, incrementAsync } from "../../redux/actions/count";

class Count extends Component {
	increment = () => {
		this.props.increment(1);
	};

	decrement = () => {
		this.props.decrement(1);
	};

	incrementAsync = () => {
		this.props.incrementAsync(1, 1000);
	};

	render() {
		const { count } = this.props;
		return (
			<div>
				<h2>我是Count组件，下方组件总人数为：{this.props.personArr.length}</h2>
				<h2>当前求和为： {count}</h2>
				&nbsp;<button onClick={this.increment}>count+1</button>
				&nbsp;<button onClick={this.decrement}>count-1</button>
				&nbsp;<button onClick={this.incrementAsync}>count异步+1</button>
			</div>
		);
	}
}

// 一般写法

// function mapStateToProps(state) {
// 	return { count: state };
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		increment: number => dispatch(createIncrementAction(number)),
// 		decrement: number => dispatch(createDecrementAction(number)),
// 		incrementAsync: number => dispatch(createIncrementAsyncAction(number))
// 	};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Count);

// 简写
export default connect(state => ({ count: state.count, personArr: state.person }), {
	increment,
	decrement,
	incrementAsync
})(Count);
