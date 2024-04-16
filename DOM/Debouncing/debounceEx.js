function delayFuncExec() { 
	console.log("I AM GFG "); 
} 

function debounce(delayFuncExec,delay=1000){
    let timerId;
    clearTimeout(timerId);
    timerId = setTimeout(delayFuncExec, delay) 
}
console.log("Timer Id: " + timerId);
