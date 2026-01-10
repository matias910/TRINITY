//scroll header effect
window.addEventListener("scroll", function () {
  const header = this.document.querySelector(".Header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// detect if we are inside /sites/
function isInSitesFolder() {
  return window.location.pathname.includes("/sites/");
}

// home button
window.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home");
  if (!homeButton) return;

  homeButton.addEventListener("click", function () {
    if (isInSitesFolder()) {
      window.location.href = "../index.html"; // from /sites/account.html
    } else {
      window.location.href = "index.html"; // from homepage
    }
  });
});

// account button
window.addEventListener("DOMContentLoaded", function () {
  const accountButton = document.getElementById("account");
  if (!accountButton) return;

  accountButton.addEventListener("click", function () {
    if (isInSitesFolder()) {
      window.location.href = "account.html"; // already in /sites
    } else {
      window.location.href = "sites/account.html"; // from homepage
    }
  });
});

//all button
window.addEventListener("DOMContentLoaded", function () {
  const allButton = document.getElementById("all");
  if (!allButton) return;

  allButton.addEventListener("click", function () {
    if (isInSitesFolder()) {
      window.location.href = "all.html"; // from /sites/account.html
    } else {
      window.location.href = "sites/all.html"; // from homepage
    }
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
