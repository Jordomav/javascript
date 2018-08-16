// Log out into the console a string that says "Hello World!"
// console.log("Hello World!");

// Day 2 - Variables and Console.log
// var myName = "Jordan";
// var myAge = 22;
const myName = "Jordan";
let myAge = 22;

// Log out into the console myName and myAge the ES5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// Log out into the console myName and myAge the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`);

//Day 2 - Date
const today =  new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
// console.log(today);
// console.log(day, month, year, hour);
console.log(`${month}/${day}/${year}`);

// Day 2 - Math
// Gets random number betweem 0 and 1
// const rand = Math.random();

// Give us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally round down the number.
const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

// Simple popup
// alert(rand);

// User clicks cancel or ok
// confirm(rand);

// Accepts a users input then alerts the name.
let name = prompt('Please enter your name:');
alert(name);
