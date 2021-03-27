/*
 * @Author: your name
 * @Date: 2021-03-05 22:40:22
 * @LastEditTime: 2021-03-07 13:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\reducer.js
 */
const initState = 0;

export default function countReducer(preState = initState, action) {
	const { type, data } = action;
	switch (type) {
		case "increment":
			return preState + data;
		case "decrement":
			return preState - data;
		default:
			return preState;
	}
}
