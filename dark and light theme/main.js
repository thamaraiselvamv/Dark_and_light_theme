// Get the theme toggle button and body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Define the dark and light theme classes
const darkThemeClass = 'dark-theme';
const lightThemeClass = 'light-theme';

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the theme class on the body element
  body.classList.toggle(darkThemeClass);
  body.classList.toggle(lightThemeClass);
});