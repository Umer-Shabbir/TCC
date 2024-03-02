var htmlBootcamp = document.getElementById('html-bootcamp');
var cssBootcamp = document.getElementById('css-bootcamp');
var jsBootcamp = document.getElementById('js-bootcamp');
var reactBootcamp = document.getElementById('react-bootcamp');
var angularBootcamp = document.getElementById('angular-bootcamp');
var pythonBootcamp = document.getElementById('python-bootcamp');
let bootcampDetailIntro = document.getElementById('bootcamp-detail-intro');


let bootcampIntros = {
  html: "HTML, short for HyperText Markup Language, is code for web pages. It uses tags to instruct browsers on content display. HTML structures text, adds images, links, and more for website creation.",
  css: "CSS, or Cascading Style Sheets, styles web content. It controls text, colors, and layout for attractive websites. CSS creates consistent styles across a site for a polished appearance",
  js: "JavaScript adds interactivity to websites, making them dynamic. It responds to user actions like clicks and form submissions, bringing web pages to life with functionality and engagement.",
  python: "Python, a versatile and beginner-friendly programming language, is used for web development, data analysis, and artificial intelligence. Write code in a text editor, then execute it for computer instructions.",
  react: "React, a JavaScript library for UI development, creates dynamic components without page reloads. Its component-based approach streamlines development for faster, efficient interfaces.",
  angular: "Angular simplifies web development with TypeScript, crafting dynamic, single-page apps. Its modular design enhances scalability and efficiency for robust web applications."
}
htmlBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.html
},false);
cssBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.css
},false);
jsBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.js
},false);
reactBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.react
},false);
pythonBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.python
},false);
angularBootcamp.addEventListener('click', function () {
  bootcampDetailIntro.textContent = bootcampIntros.angular
},false);


let enrollBootcampBtn = document.getElementById("enroll-bootcamp-btn")
let enrollStatusDisplay = document.getElementById("enroll-status-el")
let enrollStatusAdmin = "open"

if(enrollStatusAdmin === "open") {
  enrollStatusDisplay.innerHTML = `<span class="open-enroll">Enrollment Is Opened</span>`
  enrollBootcampBtn.innerHTML = `<a href="https://forms.gle/PW3bczbzqSBuLP3Z6" target="_blank">Enroll Here</a>`
}else {
  enrollStatusDisplay.innerHTML = `<span class="close-enroll">Enrollment Is Closed</span>`
}




