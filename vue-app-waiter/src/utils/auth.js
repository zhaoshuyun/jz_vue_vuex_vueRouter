// state: {
//     token：缓存中的token
// }
// login(){
//     1. 通过username/password获取token
//     2. 将token放到状态机中
//     3. 将token放到本地缓存中
// }

// Info(){
//     1. 通过token获取用户信息
//     2. 将用户信息放到状态机中
// }

// import {post_json,get} from '../../http/axios'
// import { Info } from "vant";

export function setToken(token) {
    return localStorage.setItem("token",token)
}
export function getToken() {
    return localStorage.getItem("token")

}
export function removeToken() {
    return localStorage.removeItem("token")

}