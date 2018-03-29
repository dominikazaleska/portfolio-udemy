// ECMA internation

// ECMAScript === Javascript

// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

const a = function() {
	console.log("a");
}

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

// Destructuring 

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

//Object properties

const name = 'john snow';

const obj = {
	[name]: 'hello',
	['ray ' + 'smith']: 'hihi',
	[1 + 2]: 'hihi'
}

//Object properties 2

const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,
	b, 
	c
}

//Template strings

const name = "Sally";
const age = 34;
const pet = "horse";

//const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";

//const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

//Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//arrow functions

function add(a, b) {
	return a + b;
}

const add = (a, b) => a + b;

//Advanced functions

// function first() {
// 	var greet = 'Hi';
// 	function second() {
// 		alert(greet);
// 	}
// 	return second;
// }

const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = "bobby"
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. the function executed. It's never going to execute again
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

//Currying 
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
//(b) => a * b
curriedMultiply(3)(4);
//12
const multiplyBy5 = curriedMultiply(5);

//Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding Side Effects and functional purity

var a = 1;
function b() {
	a = 2;
}



//Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
	double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce
// we never mutate - change the original array data
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);

console.log('reduce', reduceArray);


// Advanced Objects

// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

const object4 = {
	a: function() {
		console.log(this);
	}
}

// instatiation

class Player {
	constructor(name, type) {
		console.log("player", this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log("wizard", this);
	}
	play() {
		console.log(`WEEEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//ES7


//includes

'Helloooo'.includes('o');
//true

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog');
//true
pets.includes('bird');
//true

//exponential operator
const square = (x) => x**2;
square(2);
//4

const cube = (x) => x**3;
cube(3);
//27

//ES8

//string padding

'Turtle'.padStart(10);
//"    Turtle"

'Turtle'.padEnd(10);
//"Turtle    "

//trailing commas in function's parameter lists and calls

const fun = (
			 a,
			 b,
			 c,
			 d,
			 e,
			) => {
	console.log(a);
}

fun(1,2,3,4);

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

//Async Await

//Debugging

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);


const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => accumulator.concat(array), []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array)
}, []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger;
		return [].concat([0, 1])
}, []);

// How JS works?

// alocating memory
const a = 1;
const b = 100;
const c = 10;

//call stack
console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000);
console.log('3');

const one = () => {
	const two = () => {
		console.log('4');
	}
	two();
}


//CALL STACK
console.log('4')
two()
one()

//stack overflow

function foo() {
	foo();
}

foo();

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP

element.addEventListener('click', () => {
	console.log('click');
})
