// typed script

var typed = new Typed('#element', {
  strings: ['Web Developer.',],
  typeSpeed: 50,
  fadeOut: true,
  loop: true
});

// navbar-background color

const nav = document.querySelector('.navbar')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 56) {
    nav.classList.add('navbar-scrolled')
  } else {
    nav.classList.remove('navbar-scrolled')
  }
})

// tabing

const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
  li.forEach(item =>
    item.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu()
window.addEventListener("scroll", activeMenu);


// Google sheet


const scriptURL = 'https://script.google.com/macros/s/AKfycbwQaaQACzLrmS2XILy3y4gdSC9PDp-0h3mOP1Og0E-YHUo9fHMgku8JOoduDGfR_pnT/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  function displayMessageAndClearForm() {
    var form = document.getElementById("myform");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
  }
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      form.reset();
      var messageDiv = document.querySelector("body")
      messageDiv.style.cssText = `width:100%; text-align:center; margin-top:300px; font-size:30px; font-weight:800; font-family: Poppins, sans-serif; color:#ff004f!important`;
      messageDiv.innerHTML = "Thank You For Submitting the Form"
    })
    .catch(error => console.error('Error!', error.message))
})


AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})
