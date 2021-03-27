/*
 * @Author: your name
 * @Date: 2021-03-05 22:08:40
 * @LastEditTime: 2021-03-07 14:45:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\App.js
 */
import React, { Component } from "react";

import Count from "./containers/Count";

import Person from "./containers/Person";

export default class App extends Component {
	render() {
		return (
			<div>
				<Count />
				<Person />
			</div>
		);
	}
}
