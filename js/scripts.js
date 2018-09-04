// // Log out into the console a string that says "Hello World!"
// // console.log("Hello World!");
//
// // Day 2 - Variables and Console.log
// // var myName = "Jordan";
// // var myAge = 22;
// const myName = "Jordan";
// let myAge = 22;
//
// // Log out into the console myName and myAge the ES5 way
// // console.log("Hello, " + myName + "! You are " + myAge + " years old.");
//
// // Log out into the console myName and myAge the ES6 way
// console.log(`Hello, ${myName}! You are ${myAge} years old.`);
//
// //Day 2 - Date
// const today =  new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hour = today.getHours();
// // console.log(today);
// // console.log(day, month, year, hour);
// console.log(`${month}/${day}/${year}`);
//
// // Day 2 - Math
// // Gets random number betweem 0 and 1
// // const rand = Math.random();
//
// // Give us a random number, then multiply it by ten.
// // Next add 1 so we cannot get 0. Finally round down the number.
// const rand = Math.floor((Math.random() * 10) + 1);
// // console.log(rand);
//
// // Simple popup
// // alert(rand);
//
// // User clicks cancel or ok
// // confirm(rand);
//
// // Accepts a users input then alerts the name.
// let name = prompt('Please enter your name:');
// alert(name);


// Day 4 - Arrays and Loops
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let red = myArray[0];
// console.log(myArray[1])
// console.log(myArray.length);
// let about = ['Jordan', 22, 'The sky is blue.', true];
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums));

// Adds new item to the end of the array
// nums.push(10);
// Adds new item to the beginning of the Array
// nums.unshift(0);
// Removes the last item at the end of the array
// nums.pop();
// Removes the first item in the array
// nums.shift();
// Cuts out section of the array
// nums.splice(1, 4);
// Mkaes a copy of the array and then cuts the array
// let slice = nums.slice(3);
// Gives the index of an item in the array
// let color = myArray.indexOf('Green');
// console.log(myArray[color]);
// myArray.splice(color, 1);
// let lastIndex = myArray.lastIndexOf('Red');
// console.log(lastIndex);
// Reverse the array
// console.log(myArray.reverse());
// Sort the array
// console.log(myArray.sort());
// console.log(myArray);
// console.log(nums);
// console.log(slice);


// Day 4 - LOOPS
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
//   console.log(num)
// }
// for (let i = 0; i < 10; i++) {
//   console.log('I have ran');
// }
// do {
//   num++;
//   console.log(num);
// } while (num < 10);
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

let myFavoriteMovies = [];
let firstFavorite = ['Alien', '1979'];
let secondFavorite = ['Predator', '1987'];
let thirdFavorite = ['A Clockwork Orange', '1971'];
myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// console.log(myFavoriteMovies[2][1]);
let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
for (let i = 0; i < myFavoriteMovies.length; i++) {
  movieYears.push(myFavoriteMovies[i][1]);
}
console.log(movieYears);
