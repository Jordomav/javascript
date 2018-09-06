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

// let myFavoriteMovies = [];
// let firstFavorite = ['Alien', '1979'];
// let secondFavorite = ['Predator', '1987'];
// let thirdFavorite = ['A Clockwork Orange', '1971'];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// // console.log(myFavoriteMovies[2][1]);
// let movieYears = [];
// // movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// for (let i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1]);
// }
// console.log(movieYears);

// Day 7 - The DOM Part 2

// Get the text content of the para tag.
// let text = document.getElementById("para").textContent;
// document.getElementById("para").textContent = "This is some other text.";
// console.log(text);

// Get everything from the para tag.
// let text = document.getElementById("para").innerHTML;
// console.log(text);

// let content = document.getElementById("content");
//
// // Creating a paragraph tag.
// let myPTag = document.createElement("p");
// myPTag.textContent = "This is a paragraph added from the JavaScript!";
// // content.appendChild(myPTag);
// content.append(myPTag);
//
// // Creating a button and adding a class.
// let myBtn = document.createElement("button");
// myBtn.className = "btn";
// myBtn.id = "someId";
// myBtn.textContent = "Click me!";
//
// myBtn.classList.add("btn-primary");
// // myBtn.classList.remove("btn-primary");
//
// content.appendChild(myBtn);
// // console.log(document.getElementById("someId").classList);
//
//
//  // Using setAttribute
// let myImg = document.createElement("img");
// myImg.setAttribute("alt", "Add attribute from JS");
// myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg");
// content.appendChild(myImg);
// console.log(myImg.getAttribute("src"));

// Generate a page using only JavaScript.
const script = document.querySelector("script");
const body = document.querySelector("body");
//
// let newP =  document.createElement("p");
// let newH1 = document.createElement("h1");
// let newFooter = document.createElement("footer");
// let newHeader = document.createElement("header");
// let newUl = document.createElement("ul");
// let newDiv = document.createElement("div");
//
// function createLi(classArray, linkText) {
//   let newLink = document.createElement("li");
//   let newA = document.createElement("a");
//   newA.setAttribute("href", "#");
//   newA.textContent = linkText;
//   newLink.appendChild(newA);
//   for (let i = 0; i < classArray.length; i++) {
//     newLink.classList.add(classArray[i]);
//   }
//   newUl.appendChild(newLink);
// }
// createLi(["pull-left"], "Home");
// createLi(["pull-right"], "Contact");
// createLi(["pull-right"], "About");
//
// newUl.classList.add("nav", "nav-pills");
// newHeader.appendChild(newUl);
// body.insertBefore(newHeader, script);
//
// function createTextElement(elementType, text) {
//   let newElement = document.createElement(elementType);
//   newElement.textContent = text;
//   return newElement;
// }
//
// newDiv.classList.add("text-center");
//
// let h1 = createTextElement("h1", "Hello World!");
// let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
// newDiv.appendChild(h1);
// newDiv.appendChild(p);
// body.insertBefore(newDiv, script);
//
// let newFooterLink = document.createElement("a");
// newFooterLink.textContent = "Check me out.";
// newFooterLink.setAttribute("href", "https://www.google.com/");
// newFooterLink.setAttribute("target", "_blank");
// newFooterLink.classList.add("text-center", "footer");
// newFooter.appendChild(newFooterLink);
// body.insertBefore(newFooter, script);
//
//
function fizzBuzz(count, val1, val2) {
  const val3 = val1 * val2;
  let list = document.createElement("ol");
  for (let i = 1; i <= count; i++) {
    let res = document.createElement("li");
    if(i % val3 == 0) {
      res.textContent = "FizzBuzz";
      list.appendChild(res);
    } else if(i % val1 == 0) {
      res.textContent = "Fizz";
      list.appendChild(res);
    } else if(i % val2 == 0) {
      res.textContent = "Buzz";
      list.appendChild(res);
    } else {
      res.textContent = i;
      list.appendChild(res);
    }
  }
  body.insertBefore(list, script);
}

// fizzBuzz(50, 2, 5);

// Day 8 - Forms
// let messageForm = document.forms.messageForm;
// let message = messageForm["msg"];
// console.log(messageForm);
// console.log(message);

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  let list = document.getElementById("list");
  let newMessage = document.createElement("li");
  let message = e.target["msg"].value;
  newMessage.textContent = message;
  list.appendChild(newMessage);
  messageForm.reset();
  // console.log(e.target["msg"].value);
})

function generateList() {
  let fullList = [
    'First',
    'Second',
    'Third',
    'Fourth'
  ];
  let list = document.getElementById("list");
  for (var i = 0; i < fullList.length; i++) {
    let msg = document.createElement("li");
    msg.textContent = fullList[i];
    msg.id = `item-${i + 1}`;
    list.appendChild(msg);
  }
}
generateList();

// !!!!!!!!!!THIS IS BAD!!!!!!!!!!
// function submitForm() {
//   console.log(document.getElementById("message").value);
// }

// var name = "Jordan";
// var age = 22;
// var currentClass = "JavaScript";
// console.log(this.name);

function aboutMe() {
  let me = {
    firstName: "Jordan",
    lastName: "Mavrogeorge",
    age: 22,
    currentClass: "JavaScript",
    fullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }
  console.log(me.fullName());
}
aboutMe();







// End
