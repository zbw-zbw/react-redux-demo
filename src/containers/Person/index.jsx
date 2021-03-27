import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";

import { addPerson } from "../../redux/actions/person";

class Person extends Component {
	state = {
		name: "名字1",
		age: "年龄1"
	};

	addPerson = () => {
		const name = this.nameRef.value;
		const age = +this.ageRef.value;
		const personInfo = { id: nanoid(), name, age };
		this.props.addPerson(personInfo);
		this.nameRef.value = "";
		this.ageRef.value = "";
	};

	render() {
		return (
			<div>
				<h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
				<input ref={c => (this.nameRef = c)} type="text" placeholder="输入名字" />
				&nbsp;
				<input ref={c => (this.ageRef = c)} type="text" placeholder="输入年龄" />
				&nbsp;
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{this.props.personArr.map(item => {
						return (
							<li key={item.id}>
								姓名：{item.name} 年龄：{item.age}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default connect(state => ({ personArr: state.person, count: state.count }), {
	addPerson
})(Person);
