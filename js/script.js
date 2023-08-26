// REGISTER VARIABLES
const signinToggle = document.getElementById("sign-in-toggle");
const signupToggle = document.getElementById("sign-up-toggle");
const signinForm =document.getElementById("sign-in-form");
const signupForm = document.getElementById("sign-up-form");

// SEARCH VARIABLES
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

// MENU VARIABLES
const menuBtn = document.querySelector(".menu");
const popUp = document.querySelector(".popup");
const closePopup = document.querySelector(".close-btn");

// REGISTER PAGE SCRIPT

function toggleSignUp(){
  signinToggle.style.backgroundColor = "#08b74f80";
  signinToggle.style.color = "#FFFF";
  signupToggle.style.backgroundColor = "#00002f80";
  signupToggle.style.color = "#00002f";
  signupToggle.style.fontWeight = "800";
  signinForm.style.display = "none";
  signupForm.style.display = "block";
}

function toggleSignIn(){
  signinToggle.style.backgroundColor = "#00002f80";
  signinToggle.style.color = "#00002f";
  signupToggle.style.backgroundColor = "#08b74f80";
  signinToggle.style.fontWeight = "800";
  signupToggle.style.color = "#FFFF";
  signinForm.style.display = "block";
  signupForm.style.display = "none";
}

// SEARCH SCRIPT
function searchToggle(){
  searchBox.classList.toggle("hide");
}

// MENU SCRIPT
function popupToggle(){
  popUp.classList.toggle("active");
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });