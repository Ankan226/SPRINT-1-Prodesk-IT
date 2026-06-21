// ELEMENTS

const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const navbar = document.querySelector("nav");

// LOAD SAVED THEME

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");

  if (themeToggle) {
    themeToggle.textContent = "☀️";
  }

  if (themeToggleMobile) {
    themeToggleMobile.textContent = "☀️";
  }
}

// DARK MODE

function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  const isDark =
    document.documentElement.classList.contains("dark");

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }

  if (themeToggleMobile) {
    themeToggleMobile.textContent = isDark ? "☀️" : "🌙";
  }
}

themeToggle?.addEventListener("click", toggleTheme);
themeToggleMobile?.addEventListener("click", toggleTheme);

// MOBILE MENU

hamburger?.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

  const expanded =
    !mobileMenu.classList.contains("hidden");

  hamburger.setAttribute(
    "aria-expanded",
    expanded
  );

  hamburger.textContent =
    expanded ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK

document
  .querySelectorAll("#mobileMenu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.add("hidden");

      hamburger.textContent = "☰";

      hamburger.setAttribute(
        "aria-expanded",
        "false"
      );
    });

  });

// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    navbar.classList.add("shadow-lg");

  } else {

    navbar.classList.remove("shadow-lg");

  }

});