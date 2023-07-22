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

document.getElementById('apply').addEventListener('click', function() {
  document.getElementById('registration').classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const registrationForm = document.getElementById("registration");
  const closeButton = document.querySelector(".close-button");

  function showModal(content) {
    modalContent.innerHTML = content;
    modalOverlay.style.display = "block";
  }

  function hideModal() {
    modalOverlay.style.display = "none";
    registrationForm.reset();
  }

  function hideForm() {
    document.getElementById('registration').classList.add('hidden');
  }

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;

    const modalContentText = `<p>Thank you for booking, ${fullName}!</p>
          <br>
          <p>You will receive a confirmation email at ${email}</p>
          <br>`;

    showModal(modalContentText);
  });

  closeButton.addEventListener("click", function() {
    hideModal();
    hideForm();
  });

});