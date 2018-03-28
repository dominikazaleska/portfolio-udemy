// scope 

//Root Scope
// var fun = 5;

// function funFunction() {
// 	//child scope
// 	var fun = "helloooo";
// 	console.log(1, fun);
// }

// function funerFunction() {
// 	//child scope
// 	var fun = "Byee";
// 	console.log(2, fun);
// }

// function funestFunction() {
// 	//child scope
// 	fun = "AHHHHHH";
// 	console.log(3, fun);
// }

// console.log("window", fun);


//Root Scope (window)
var fun = 5;

function funestFunction() {
	//child scope
	console.log(fun);
}