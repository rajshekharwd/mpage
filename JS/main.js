window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Seconds-header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.PageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// time-sextion

function startTime(){

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

let m = now.getMinutes();
let s = now.getSeconds();
m = checkTime(m);
s = checkTime(s);

document.getElementById("days").innerHTML = day;
document.getElementById("hours").innerHTML = now.getHours();
document.getElementById("minuts").innerHTML = m;
document.getElementById("Seconds").innerHTML = s;
  setTimeout(startTime, 1000);	
}
function checkTime(i) {
if (i < 10) {i = "0" + i}; 
return i;
}



// ...........progress-section..start......


let printvalue = document.querySelectorAll(".num");
let interval = 3000;
printvalue.forEach((printvalue) => {
  let start = 0;
  let end = parseInt(printvalue.getAttribute("data-val"));
  let duration = Math.floor(interval / end);
  let counter = setInterval(function () {
    start += 1;
    printvalue.textContent = start;
    if (start == end) {
      clearInterval(counter);
    }
  }, duration);
});

// ...........progress-section.end.......





var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}









const scrolltoTop = document.querySelector("totopbtn")

scrolltoTop.addEventListener("click",() => {
	window.scrollto({
     top:0,
		behavior:"smooth"

	});

});

		














var acc = document.getElementsByClassName("card-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






function startTime(){

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

let m = now.getMinutes();
let s = now.getSeconds();
m = checkTime(m);
s = checkTime(s);

document.getElementById("days").innerHTML = day;
document.getElementById("hours").innerHTML = now.getHours();
document.getElementById("minuts").innerHTML = m;
document.getElementById("Seconds").innerHTML = s;
  setTimeout(startTime, 1000);	
}
function checkTime(i) {
if (i < 10) {i = "0" + i}; 
return i;
}
