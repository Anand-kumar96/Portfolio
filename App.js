var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')
var showMores = document.getElementsByClassName('show-more')
var sideMenu = document.getElementById('sideMenu')
var showMoreBtn = document.getElementsByClassName('more')[0]
var showLessBtn = document.getElementsByClassName('less')[0]

function openTab(tabName, event) {
  for (var tabLink of tabLinks) {
    tabLink.classList.remove('active-link')
  }
  for (var tabContent of tabContents) {
    tabContent.classList.remove('active-tabs')
  }
  event.target.classList.add('active-link')
  document.getElementById(tabName).classList.add('active-tabs')
}

function openMenu() {
  sideMenu.style.right = '0'
}
function closeMenu() {
  sideMenu.style.right = '-150px'
}

function showMore(event) {
  for (var showMore of showMores) {
    showMore.style.display = 'block'
  }
  showMoreBtn.style.display = 'none'
  showLessBtn.style.display = 'block'
}

function showLess() {
  for (var showMore of showMores) {
    showMore.style.display = 'none'
  }
  showMoreBtn.style.display = 'block'
  showLessBtn.style.display = 'none'
}

// for sending contact message to google sheet
const scriptURL =
  'https://script.google.com/macros/s/AKfycbwLYohhTP8ZVMZnFK-pNHS_c_106EAWpUZ7tOoDzo8rGRIRhq7p27OupyASsNGKoAHaDQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
const submit = document.getElementById('submit')
const textarea = document.getElementById('textarea')

form.addEventListener('submit', (e) => {
  submit.innerHTML = 'submitting...'
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      msg.innerHTML = 'Message submitted Successfully...'
      submit.innerHTML = 'submitted'
        setTimeout(() => {
           msg.innerHTML = ''
             submit.innerHTML = 'submit'
        },5000);
        form.reset();
    })
    .catch((error) => console.error('Error!', error.message))
})
