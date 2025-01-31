var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')
function opentab (tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
}
let sidemenu = document.getElementById('sidemenu')
function openmenu () {
  sidemenu.style.right = '0'
}
function closemenu () {
  sidemenu.style.right = '-200px'
}

// ----formjs------

const scriptURL =
  'https://script.google.com/macros/s/AKfycbwUibu0EVBKw7BR6RvjssFiM7QvX4D9ZPgyvAEYekktHU0EAO1Kt9wK8jn4J5ywIBgGNA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message sent sucessfully'
      setTimeout(() => (msg.innerHTML = ''), 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// -----TypedTextAnimation.js-----

var typed = new Typed('#element', {
  strings: ['Software Engineer', 'AWS Certified Cloud Practioner'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
