const primaryNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      hamburger.setAttribute("aria-expanded",true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      hamburger.setAttribute("aria-expanded", false);
    }
}) 

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

    const modalContentText = `<p>Thank you for inquiring, ${fullName}!</p>
          <br>
          <p>A program advisor will reach out to you via email at ${email}</p>
          <br>`;

    showModal(modalContentText);
  });

  closeButton.addEventListener("click", function() {
    hideModal();
    hideForm();
  });

});