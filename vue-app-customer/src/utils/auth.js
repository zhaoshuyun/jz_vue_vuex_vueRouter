export function setToken(token){
	localStorage.setItem("token",token);
}
export function getToken(token){
	return localStorage.getItem("token");
}
export function removeToken(){
	localStorage.removeItem("token");
}
// export function setInfo(info){
// 	localStorage.setItem("info",info);
// }
// export function getInfo(info){
// 	return localStorage.getItem("info");
// }
// export function removeInfo(){
// 	localStorage.removeItem("info");
// }

export function setInfoId(infoId){
	localStorage.setItem("infoId",infoId);
}
export function getInfoId(infoId){
	return localStorage.getItem("infoId");
}
export function removeInfoId(){
	localStorage.removeItem("infoId");
}

export function setInfoName(infoName){
	localStorage.setItem("infoName",infoName);
}
export function getInfoName(infoName){
	return localStorage.getItem("infoName");
}
export function removeInfoName(){
	localStorage.removeItem("infoName");
}