"use strict";

//Declaratie van const
const headerInput = document.querySelector(".inputHeader");
const textInput = document.querySelector(".inputArea");
const btnInput = document.querySelector(".btn--input");

const addElement = function () {
  const headerInput = document.querySelector(".inputHeader");
  const textInput = document.querySelector(".inputArea");

  // create a new div element
  const newSection = document.createElement("section");

  // and give it some content
  const headerContent = document.createTextNode(headerInput);
  const newContent = document.createTextNode(textInput);

  // add the text node to the newly created div
  newSection.appendChild(headerContent);

  // add the newly created element and its content into the DOM
  const currentSection = document.getElementById("div1");
  document.body.insertBefore(newSection, currentSection);
};

console.log(btnInput);
btnInput.addEventListener("click", addElement);
