const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

const showHeight = () => {
  nav.classList.toggle('maxHeight');
  menuIcon.classList.toggle('active');
};

// event listener
menuIcon.addEventListener('click', showHeight);
