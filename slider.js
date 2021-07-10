// slider 1
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000);

// slider 2
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

function updatePosition(){
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible")
        slide.classList.add("carousel__item--hidden");
    }
    slides[slidePosition].classList.add("carousel__item--visible")
}

function moveToNextSlide(){
    if(slidePosition === totalSlides-1){
        slidePosition = 0;
    } else {
        slidePosition ++;
    }
    updatePosition();
}

function moveToPrevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides -1;
    } else {
        slidePosition --;
    }
    updatePosition();
}

document.getElementById('carousel__btn--prev')
    .addEventListener("click",function(){
    moveToPrevSlide();
});
    
document.getElementById('carousel__btn--next')
    .addEventListener("click",function(){
    moveToNextSlide();
});