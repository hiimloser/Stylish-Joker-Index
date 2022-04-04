var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslide");
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
  // setTimeout(showSlides,2000);
}
// menu - tab
var slideindex = 1;
showmenu(slideindex);
function currentmenu(n) {
  showmenu(slideindex = n);
}
function showmenu(n) {
  let i;
  let slides = document.getElementsByClassName("home-menu_item");
  let dots = document.getElementsByClassName("tab");
  if (n > slides.length) {slideindex = 1}    
  if (n < 1) {slideindex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindex-1].style.display = "block";  
  dots[slideindex-1].className += " active";
}
