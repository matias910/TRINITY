//scroll header effect
window.addEventListener("scroll", function () {
  const header = this.document.querySelector(".Header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//home button
window.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", function () {
    window.open("../index.html", "_self");
  });
});

//account button
window.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.getElementById("account");
  accountButton.addEventListener("click", function () {
    window.open("sites/account.html", "_self");
  });
});

//whatsapp button
window.addEventListener("DOMContentLoaded", function () {
  const wppButton = document.getElementById("wpp");
  wppButton.addEventListener("click", function () {
    window.open("https://www.whatsapp.com/", "_blank");
  });
});

//instagram button
window.addEventListener("DOMContentLoaded", function () {
  const instagramButton = document.getElementById("Instagram");
  instagramButton.addEventListener("click", function () {
    window.open(
      "https://www.instagram.com/ttrinityco/?igsh=djBwaWhhdWxxbWtv#",
      "_blank"
    );
  });
});

// ACCOUNT PAGE //

//account placeholders
window.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".correo input");
  const passwordInput = document.querySelector(".contraseña input");
  emailInput.setAttribute("placeholder", "Correo Electronico");
  passwordInput.setAttribute("placeholder", "Contraseña");
});
