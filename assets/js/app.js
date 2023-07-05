// const primaryNav = document.querySelector('.mobile-nav')
// const hamburger = document.querySelector('.hamburger')

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active')
//     const visibility = primaryNav.getAttribute('data-visible')

//     if (visibility === "false") {
//       primaryNav.setAttribute("data-visible", true);
//       hamburger.setAttribute("aria-expanded",true);
//     } else {
//       primaryNav.setAttribute("data-visible", false);
//       hamburger.setAttribute("aria-expanded", false);
//     }
// }) 

// primaryNav.addEventListener('click', function() {
//   primaryNav.setAttribute("data-visible", false);
//   hamburger.setAttribute("aria-expanded", false);
//   hamburger.classList.toggle('active')
// });

const hamburger = document.querySelector('.hamburger');
let hamburgerOpen = false;
const primaryNav = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (!hamburgerOpen) {
    hamburger.classList.add('open');
    hamburgerOpen = true;
    primaryNav.setAttribute("data-visible", true);
  } else {
    hamburger.classList.remove('open');
    hamburgerOpen = false;
    primaryNav.setAttribute("data-visible", false);
  }
});