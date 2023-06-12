
// Description: This file contains the javascript code for the index.html file.

const getElement = (selector) => document.querySelector(selector);
const addClickEvent = (element, callback) => element.addEventListener('click', callback);


const slide1 = getElement(".myPicSlides1");
const slide2 = getElement(".myPicSlides2");
const slide3 = getElement(".myPicSlides3");
const NumberOne = getElement(".NumberOne");
const NumberTwo = getElement(".NumberTwo");
const NumberThree = getElement(".NumberThree");

const button1 = getElement(".btn1");
const button2 = getElement(".btn2");
const button3 = getElement(".btn3");
const button4 = getElement(".btn4");

const tab1 = getElement(".main6");
const tab2 = getElement(".main6");


const blanksectionSmooth = getElement(".main2half");
const dropDownButton = getElement("#dropdown");
const dropDownContent = getElement(".dropdowndetails");

const setActiveSlide = (slide) => {
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "none";
  slide.style.display = "block";
};

const setActiveNumber = (number) => {
  NumberOne.style.backgroundColor = "#ffffff";
  NumberTwo.style.backgroundColor = "#ffffff";
  NumberThree.style.backgroundColor = "#ffffff";
  number.style.backgroundColor = "#A8A8A8";
};

const setButtonStyle = (activeButton, inactiveButton) => {
  activeButton.style.color = "#414f6b";
  activeButton.style.backgroundColor = "#b0b4be";
  inactiveButton.style.color = "#b0b4be";
  inactiveButton.style.backgroundColor = "#414f6b";
  activeButton.style.textDecoration = "underline";
  inactiveButton.style.textDecoration = "none";
};

const setTabDisplay = (activeTab, inactiveTab) => {
  activeTab.style.display = "flex";
  inactiveTab.style.display = "none";
};

const handleNumberClick = (slide, number) => {
  return function () {
    setActiveSlide(slide);
    setActiveNumber(number);
  };
};

addClickEvent(NumberOne, handleNumberClick(slide1, NumberOne));
addClickEvent(NumberTwo, handleNumberClick(slide2, NumberTwo));
addClickEvent(NumberThree, handleNumberClick(slide3, NumberThree));

addClickEvent(button1, function () {
  setButtonStyle(button1, button2);
  setTabDisplay(tab1, tab2);
});
addClickEvent(button2, function () {
  setButtonStyle(button2, button1);
  setTabDisplay(tab2, tab1);
});
addClickEvent(button3, function () {
  setButtonStyle(button3, button4);
  setTabDisplay(tab1, tab2);
});
addClickEvent(button4, function () {
  setButtonStyle(button4, button3);
  setTabDisplay(tab2, tab1);
});

window.onscroll = function () {
  myFunction();
};

const navbar = getElement(".main2");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    blanksectionSmooth.style.display = "block";
  } else {
    blanksectionSmooth.style.display = "none";
    navbar.classList.remove("sticky");
  }
}

addClickEvent(dropDownButton, function () {
  dropDownContent.style.display = dropDownContent.style.display === "none" ? "block" : "none";
});
