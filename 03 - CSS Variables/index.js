window.onload = function() {
  document.documentElement.style.opacity = '1';
}
const inputs = document.querySelectorAll('.slider');

function handleChange(name, value, suffix) {
  document.documentElement.style.setProperty(name, value + suffix);
}