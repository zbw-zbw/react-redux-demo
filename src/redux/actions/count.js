/*
 * @Author: your name
 * @Date: 2021-03-05 23:19:22
 * @LastEditTime: 2021-03-07 14:43:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\count_action.js
 */

import { INCREMENT, DECREMENT } from "../constant";

let timer;
export const increment = data => ({ type: INCREMENT, data });
export const decrement = data => ({ type: DECREMENT, data });
export const incrementAsync = (data, time) => {
	return dispatch => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			dispatch(increment(data));
		}, time);
	};
};
