

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for(let item of errors) {
    item.innerHTML="";
  }
}

function validate() {
  var returnval = true;
  clearErrors();

  var pwd = document.getElementById("password").value;


  if(pwd.length>6){
    // alert("You have provided a valid Email Id")
    return true
  }
  else{
    alert("Password should be greater than 6 characters")
    return false;
  }
}