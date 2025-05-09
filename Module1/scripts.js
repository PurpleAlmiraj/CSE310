// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Modal open/close
const modal = document.getElementById("modal");
const openModal = () => modal.style.display = "flex";
window.openModal = openModal;

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Live clock
const clock = document.getElementById("clock");
setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}, 1000);

// Search filter
const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList").getElementsByTagName("li");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  for (let item of itemList) {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
  }
});

// Form validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email && email.includes("@")) {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    message.classList.remove("hidden");
  } else {
    message.textContent = "Please fill out all fields correctly.";
    message.style.color = "red";
    message.classList.remove("hidden");
  }
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const stylesBtn = document.getElementById("styles-btn");
const stylesPanel = document.getElementById("styles-panel");
const applyStylesBtn = document.getElementById("apply-styles");
const resetStylesBtn = document.getElementById("reset-styles");

// Toggle the visibility of the styles panel
stylesBtn.addEventListener("click", () => {
  stylesPanel.style.display = (stylesPanel.style.display === "block") ? "none" : "block";
});

// Apply the selected styles 
applyStylesBtn.addEventListener("click", () => {
  const bgColor = document.getElementById("bg-color").value;
  const fontFamily = document.getElementById("font-family").value;
  const fontColor = document.getElementById("font-color").value;
  const fontSize = document.getElementById("font-size").value;

  document.body.style.backgroundColor = bgColor;
  document.body.style.fontFamily = fontFamily;
  document.body.style.color = fontColor;
  document.body.style.fontSize = fontSize; // Apply the font size

  // Hide the styles panel after applying changes
  stylesPanel.style.display = "none";
});

// Reset styles to default values
resetStylesBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
  document.body.style.fontFamily = "";
  document.body.style.color = "";
  document.body.style.fontSize = ""; // Reset font size

  // Close the styles panel after resetting
  stylesPanel.style.display = "none";
});

const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
