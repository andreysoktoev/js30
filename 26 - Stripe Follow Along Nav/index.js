const navbar = document.querySelectorAll('.navbar li');
const dropdown = document.querySelectorAll('.dropdown_item');

// navbar.onmouseover = () => {
//   dropdown.style.display = 'flex';
// }
// menuDropdown.onmouseover = () => {
//   menuDropdown.style.display = 'flex';
// }
// menuHeader.onmouseout = () => {
//   menuDropdown.style.display = 'none';
// }
// menuDropdown.onmouseout = () => {
//   menuDropdown.style.display = 'none';
// }

// navbar.onmouseover = () => {
//   dropdown[0].style.display = 'flex';
//   setTimeout(
//     () => {
//       dropdown[0].style.opacity = '1';
//     }, 100
//   );
// }

navbar.forEach(i => {
  i.onmouseover = () => {
    i.lastElementChild.style.display = 'flex';
    setTimeout( () => {
      i.lastElementChild.style.opacity = '1';
      }, 100
    );
  }
})
navbar.forEach(i => {
  i.onmouseout = () => {
    i.lastElementChild.style.opacity = '0';
    setTimeout( () => {
      i.lastElementChild.style.display = 'none';
      }, 100
    );
  }
})