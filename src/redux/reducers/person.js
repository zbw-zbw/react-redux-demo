/*
 * @Author: your name
 * @Date: 2021-03-07 13:17:05
 * @LastEditTime: 2021-03-07 13:40:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\reducers\person.js
 */
import { ADD_PERSON } from "../constant";
const initState = [{ id: 1, name: "zbw", age: 18 }];

export default function PersonReducer(preState = initState, action) {
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState];
		default:
			return preState;
	}
}
