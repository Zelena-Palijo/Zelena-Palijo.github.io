//open close contact form
function openForm(){
  document.getElementById("myForm").style.display="block";
}

function closeForm(){
  document.getElementById("myForm").style.display="none";
}

//display first image in the slideshow when the page loads
var slideIndex=1;
showSlides(slideIndex);

//changes the slide when the L or R arrows are clicked
function plusSlides(n){
  showSlides(slideIndex+=n);
}

//changes the slide when the dots are clikced
function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  var slides=document.getElementsByClassName("mySlides"); //this takes all elemets with the class name myslides and stores them in the variable array slides
  var dots=document.getElementsByClassName("dot"); //dot store in array dots
  if(n>slides.length){slideIndex=1}; 
  if(n<1){slideIndex=slides.length};
  for (i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(i=0;i<dots.length;i++){
    dots[i].className=dots[i].className.replace(" active",""); 
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
}

//close contact form when the user clicks away
document.addEventListener("click",function(event){
  if(event.target.matches(".cancel")|| !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
    closeForm()
  }
}, false)