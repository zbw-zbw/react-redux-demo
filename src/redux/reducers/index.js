/*
 * @Author: your name
 * @Date: 2021-03-07 14:37:00
 * @LastEditTime: 2021-03-07 14:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\reducers\index.js
 */
import { combineReducers } from "redux";
import count from "./count";
import person from "./person";
export default combineReducers({
	count,
	person
});
