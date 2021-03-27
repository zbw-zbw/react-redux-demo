/*
 * @Author: your name
 * @Date: 2021-03-05 22:08:40
 * @LastEditTime: 2021-03-07 12:34:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
