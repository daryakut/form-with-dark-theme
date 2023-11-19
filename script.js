// select root element, create left&right parts + append form to the right
const root = document.querySelector("#root");

// create header-container
const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");

// elements of header
const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = "./images/logo.svg";
logo.alt = "Company Logo";

const logoLink = document.createElement("a");
logoLink.href = "#";
logoLink.innerText = "Company";
logoLink.classList.add("logo-link");

logoContainer.append(logo, logoLink);
headerContainer.append(logoContainer);

const navContainer = document.createElement("div");
navContainer.classList.add("nav-container");

const nav = document.createElement("nav");
nav.classList.add("nav");

// append logoLink and nav header
// headerContainer.appendChild(logoContainer);

root.prepend(headerContainer);

// Создание элементов навигации
const navLinks = ["Home", "About", "Store"];
for (const linkText of navLinks) {
  const navLink = document.createElement("a");
  navLink.textContent = linkText;
  navLink.href = "#";
  navLink.classList.add("nav-link");
  nav.appendChild(navLink);
}

// create themeSwitcherBtn
const themeSwitcherBtn = document.createElement("button");
themeSwitcherBtn.classList.add("theme-switcher-btn");

// create img for btn
const themeSwitcherImg = document.createElement("img");
themeSwitcherImg.src = "./images/switcher.png";
themeSwitcherImg.alt = "Theme Switcher";
themeSwitcherBtn.appendChild(themeSwitcherImg);

const accountLinkContainer = document.createElement("div");
accountLinkContainer.classList.add("account-link-container");

// create accountLink "Account"
const accountLink = document.createElement("a");
accountLink.href = "#";
accountLink.textContent = "Account";
accountLink.classList.add("account-link");

// create arrowImage (SVG)
const arrowImage = document.createElement("img");
arrowImage.src = "./images/arrow.svg"; // Укажите путь к изображению стрелки
arrowImage.alt = "Arrow";



// add link & img to accountLinkContainer
accountLinkContainer.append(accountLink, arrowImage);

// add accountLinkContainer to nav, nav to headerContainer
navContainer.append(nav, themeSwitcherBtn, accountLinkContainer);
headerContainer.append(logoContainer, navContainer);

//create leftContainer

const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");
const rightContainer = document.createElement("div");
rightContainer.classList.add("right-container");
const form = document.createElement("form");
form.classList.add("register-form");
root.append(leftContainer, rightContainer);
rightContainer.append(form);

//create company-info in leftContainer
const companyInfo = document.createElement("div");
companyInfo.classList.add("company-info");
const companyName = document.createElement("h1");
companyName.innerText = "Hello World";
companyName.classList.add("company-name");
const companyDescription = document.createElement("p");
companyDescription.innerHTML =
  "It is a long established fact that a reader will be distracted by the readable content";
companyDescription.classList.add("company-description");
const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");
const mainAdvertismentBtn = document.createElement("button");
mainAdvertismentBtn.innerText = "Button";
mainAdvertismentBtn.classList.add("main-advertisment-btn");
const secondAdvertisementBtn = document.createElement("button");
secondAdvertisementBtn.innerText = "Button";
secondAdvertisementBtn.classList.add("second-advertisment-btn");
btnContainer.append(mainAdvertismentBtn, secondAdvertisementBtn);
companyInfo.append(companyName, companyDescription, btnContainer);
leftContainer.append(companyInfo);

// create formHeader element + append to form
const formHeader = document.createElement("div");
formHeader.classList.add("form-header");
form.append(formHeader);

// create heading for formHeader  + append to formHeader
const heading = document.createElement("h1");
heading.innerText = "Create account";
heading.classList.add("formheader-h1");
formHeader.append(heading);

// create iconFormContainer for formHeader  + append to formHeader
const iconFormContainer = document.createElement("div");
iconFormContainer.classList.add("icon-form-container");
formHeader.append(iconFormContainer);

// create 3 icons for iconFormContainer, append to iconFormContainer
const facebookIcon = document.createElement("img");
facebookIcon.src = "./images/facebook.svg";
facebookIcon.alt = "facebook icon";
facebookIcon.classList.add("form-icon");
iconFormContainer.append(facebookIcon);

const googleIcon = document.createElement("img");
googleIcon.src = "./images/google.svg";
googleIcon.alt = "google icon";
googleIcon.classList.add("form-icon");
iconFormContainer.append(googleIcon);

const twitterIcon = document.createElement("img");
twitterIcon.src = "./images/twitter.svg";
twitterIcon.alt = "twitter icon";
twitterIcon.classList.add("form-icon");
iconFormContainer.append(twitterIcon);

// create parahraph, append to form
const formHeaderParagraph = document.createElement("p");
formHeaderParagraph.innerText = "Or login using email & password";
formHeaderParagraph.classList.add("form-header-paragraph");
form.append(formHeaderParagraph);

// create emailLabel and fullNameInput for form  + append to form
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.classList.add("email-label");
emailLabel.innerText = "Email address";
form.append(emailLabel);

const emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.placeholder = "hello@hey.com";
// emailInput.placeholder.classList.add("placeholder"); 
emailInput.classList.add("email-input");
emailInput.id = "email";
form.append(emailInput);

//creat password label, input, append to form
const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.innerText = "Password";
passwordLabel.classList.add("password-label");
form.append(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "••••••••";
// passwordInput.placeholder.classList.add("placeholder"); 
passwordInput.id = "password";
passwordInput.classList.add("password-input");
form.append(passwordInput);

// create container for checkBoxLabel and checkBoxInput for form  + append to form

const checkBoxContainer = document.createElement("div");
checkBoxContainer.classList.add("checkBox-container");

const rememberMeCheckbox = document.createElement("input");
rememberMeCheckbox.type = "checkbox";
rememberMeCheckbox.id = "remember-me";
rememberMeCheckbox.classList.add("rememberMeCheckbox-input");
checkBoxContainer.append(rememberMeCheckbox);

const rememberMeLabel = document.createElement("label");
rememberMeLabel.setAttribute("for", "remember-me");
// rememberMeLabel.innerText = "Remember me";
rememberMeLabel.classList.add("rememberMe-label");
checkBoxContainer.append(rememberMeLabel);

const rememberMeSpan = document.createElement("span");
rememberMeSpan.innerText = "Remember me";
rememberMeSpan.classList.add("rememberMeSpan");
rememberMeLabel.append(rememberMeSpan);

// Link "Forgot password?"
const forgotPasswordLink = document.createElement("a");
forgotPasswordLink.href = "#";
forgotPasswordLink.innerText = "Forgot password?";
forgotPasswordLink.classList.add("forgotPassword-link");
checkBoxContainer.append(forgotPasswordLink);
form.append(checkBoxContainer);

// submitButton

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.classList.add("submitButton");
submitButton.innerText = "Login";
form.append(submitButton);

////////////////////////////////////////////////////////////////////////////////////


const currentTheme = localStorage.getItem("theme");
 const userFromStorage = JSON.parse(localStorage.getItem("userData"));

if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (document.body.classList.contains("dark-theme")) {
    arrowImage.src = "./images/arrowdark.svg";
    logo.src = "./images/logodark.svg";
    themeSwitcherImg.src = "./images/switcherdark.png";
    facebookIcon.src = "./images/facebookdark.svg";
    googleIcon.src = "./images/googledark.svg";
    twitterIcon.src = "./images/twitterdark.svg";
  } else {
    arrowImage.src = "./images/arrow.svg";
    logo.src = "./images/logo.svg";
    themeSwitcherImg.src = "./images/switcher.png";
    facebookIcon.src = "./images/facebook.svg";
    googleIcon.src = "./images/google.svg";
    twitterIcon.src = "./images/twitter.svg";
  }
}


themeSwitcherBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    arrowImage.src = "./images/arrowdark.svg";
    logo.src = "./images/logodark.svg";
    themeSwitcherImg.src = "./images/switcherdark.png";
    facebookIcon.src = "./images/facebookdark.svg";
    googleIcon.src = "./images/googledark.svg";
    twitterIcon.src = "./images/twitterdark.svg";

  } else {
    arrowImage.src = "./images/arrow.svg";
    logo.src = "./images/logo.svg";
    themeSwitcherImg.src = "./images/switcher.png";
    facebookIcon.src = "./images/facebook.svg";
    googleIcon.src = "./images/google.svg";
    twitterIcon.src = "./images/twitter.svg";
  }
  localStorage.setItem("theme", document.body.classList);
 
});




if (userFromStorage) {
  emailInput.value = userFromStorage.email;
  passwordInput.value = userFromStorage.password;
}



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem("userData", JSON.stringify(user));
  emailInput.value = "";
  passwordInput.value = "";
});


