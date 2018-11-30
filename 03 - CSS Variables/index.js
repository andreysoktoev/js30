window.onload = function() {
  document.documentElement.style.opacity = '1';
}

function handleChange(name, value, suffix) {
  document.documentElement.style.setProperty(name, value + suffix);
}