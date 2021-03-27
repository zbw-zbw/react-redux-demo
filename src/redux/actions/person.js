/*
 * @Author: your name
 * @Date: 2021-03-07 13:15:42
 * @LastEditTime: 2021-03-07 14:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-demo\src\redux\actions\person.js
 */
import { ADD_PERSON } from "../constant";

export const addPerson = personInfo => ({ type: ADD_PERSON, data: personInfo });
