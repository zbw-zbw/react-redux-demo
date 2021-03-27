/*
 * @Author: your name
 * @Date: 2021-03-05 22:40:15
 * @LastEditTime: 2021-03-07 14:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\store.js
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
