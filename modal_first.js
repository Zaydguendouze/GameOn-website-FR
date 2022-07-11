function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM elements const
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeMsg = document.querySelector(".message");

// submit
const form = document.getElementById("form");

// messages
const messagesErrors = {
  lastNameMsg1: "Le Nom doit comporter au moins deux caractères",
  lastNameMsg2: "Le Nom doit être composé de lettres",
  firstNameMsg1: "Le Nom doit comporter au moins deux caractères",
  firstNameMsg2: "Le Nom doit être composé de lettres",
  emailMsg: "Veuillez entrer une adresse mail valide",
  birthdateMsg: "Veuillez entrer une date de naissance valide",
  tounamentsMsg: "Veuillez entrer un nombre de tournois",
  locationMsg: "Veuillez séléctionner une ville",
  checkboxMsg: "Veuillez cocher accepter les conditions d'utilisation"
}

// add modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// close modal event (désactive le display)
closeBtn.addEventListener("click", closeModal);

// remove() retire l'élément du DOM (bground)
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// confirmation
function confirmation() {
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".confirmation").style.display = "block";
}

// validate
form.addEventListener("input", function validate(e) {

  e.preventDefault();
  
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
  let tournaments = document.getElementById("tournaments");

  // regex
  let nameRegex = /^[a-zA-Z-\s]+$/;
  let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  let birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  let isError = false;

  // firstName
  if (firstName.value.trim() == "" || firstName.value.length <= 2) {

    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg1;
    isError = true;

  } else if (nameRegex.test(firstName.value) == false) {

    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg2;
    isError = true;

  } else {
    document.getElementById("firstname-message").innerHTML = "";
  }

  // lastName
  if (lastName.value.trim() == "" || lastName.value.length <= 2) {

    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg1;
    isError = true;

  } else if (nameRegex.test(lastName.value) == false) {

    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg2;
    isError = true;

  } else {
    document.getElementById("lastname-message").innerHTML = "";
  }

  // email
  if (emailRegex.test(email.value) == false) {

    let emailError = document.getElementById("email-message");
    emailError.innerHTML = messagesErrors.emailMsg;
    isError = true;

  } else {
    document.getElementById("email-message").innerHTML = "";
  }

  // birthdate
  if (birthdateRegex.test(birthdate.value) == false) {

    let birthdateError = document.getElementById("birthdate-message");
    birthdateError.innerHTML = messagesErrors.birthdateMsg;
    isError = true;

  } else {
    document.getElementById("birthdate-message").innerHTML = "";
  }
  
  // tournaments
  if (tournaments.value.trim() == "" || tournaments.value.length < 1) {

    let tournamentsError = document.getElementById("tournaments-message");
    tournamentsError.innerHTML = messagesErrors.tounamentsMsg;
    isError = true;

  } else {
    document.getElementById("tournaments-message").innerHTML = "";
  }

  // location
  if (!form.location.value) {
    let locationError = document.getElementById("location-message");
    locationError.innerHTML = messagesErrors.locationMsg;
    isError = true;
    
  } else {
    document.getElementById("location-message").innerHTML = "";
  }

  // checkboxs
  if (!form.checkbox1.checked) {
    let checkboxError = document.getElementById("checkbox-message");
    checkboxError.innerHTML = messagesErrors.checkboxMsg;
    isError = true;

  } else {
    document.getElementById("checkbox-message").innerHTML = "";
  }

  if (isError) { return }
  else { confirmation(); }

});





