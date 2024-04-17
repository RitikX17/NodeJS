function delayFuncExec() { 
	console.log("I AM GFG "); 
} 
let timerId;
function debounce(delayFuncExec,delay=1000){
    clearTimeout(timerId);
    timerId = setTimeout(delayFuncExec, delay) 
}
console.log("Timer Id: " + timerId);
