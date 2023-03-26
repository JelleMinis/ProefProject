"use strict";

//Declaratie van const
const h1EL = document.querySelector(".text-H1");
const textInputEL = document.querySelector(".textArea");
const btnInput = document.querySelector(".btn--input");

//string fixer
const stringFixer = function (str) {};

//string input

//Header input

const addElement = function () {
  const h1 = h1EL.value + " ";
  const text = textInputEL.value;
  console.log(text);

  // create a new div element
  const newSection = document.createElement("section");

  // and give it some content
  const headerContent = document.createTextNode(h1);
  const newContent = document.createTextNode(text);

  newSection.appendChild(headerContent);
  newSection.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentSection = document.getElementById("div1");
  document.body.insertBefore(newSection, currentSection);
};

// console.log(btnInput);
btnInput.addEventListener("click", addElement);

// const squareDigits = function (num) {
//   const a = Array.from(String(num), Number);
//   console.log(a);
//   let b = [];
//   for (let i = 0; i < a.length; i++) {
//     const c = Math.pow(a[i], 2);
//     b.push(c);
//   }
//   return Number(b.join(""));
// };

// const printerError = function (str) {
//   let numError = 0;
//   const alph = "abcdefghijklmnopqrstuwvxyz";
//   const error = [...alph.slice(13, alph.length)];
//   for (const i = 0; i < str.length; i++) {}
//   return console.log(error);
// };

// console.log(printerError("aaaaaaaadddddddddddddzzzz"));
