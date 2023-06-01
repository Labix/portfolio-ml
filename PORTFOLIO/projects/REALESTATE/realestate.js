const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");


function showDiv(num) {
    var divs = document.getElementsByClassName("content");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    document.getElementById("div" + num).style.display = "block";
}

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".slider-prev-btn");
const nextButton = document.querySelector(".slider-next-btn");
const slideWidth = document.querySelector(".slider-item").clientWidth;
let currentSlide = 0;

function slideToCurrent() {
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = 2;
    } else {
        currentSlide--;
    }
    slideToCurrent();
});

nextButton.addEventListener("click", () => {
    if (currentSlide === 2) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slideToCurrent();
});

slideToCurrent();

openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

//SLIDER MOBILNY

const slidermob = document.querySelector('.slider-container-mob'),
slidesmob = Array.from(document.querySelectorAll('.slide-mob'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

slidesmob.forEach((slidemob, index) =>{
    const slideImage = slidemob.querySelector('img')
    slideImage.addEventListener('dragstart', (e) =>
    e.preventDefault());
    
    //Touch events
    slidemob.addEventListener('touchstart', touchStart(index))
    slidemob.addEventListener('touchend', touchEnd)
    slidemob.addEventListener('touchmove', touchMove)

    //Mouse events
    slidemob.addEventListener('mousedown', touchStart(index))
    slidemob.addEventListener('mouseup', touchEnd)
    slidemob.addEventListener('mouseleave', touchEnd)
    slidemob.addEventListener('mousemove', touchMove)  
})
/*window.oncontextmenu = function (event){
    event.preventDefault()
    event.stopPropagation()
    return false
}*/


function touchStart(index){
    return function(event){
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true

        //https://css-tricks.com/using-requestanimationframe/
        animationID = requestAnimationFrame(animation)
    }
}

function touchEnd(){
    isDragging = false
    cancelAnimationFrame(animationID)
}

function touchMove(){
    if(isDragging){
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function getPositionX(event){
    return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX
}

function animation(){
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition(){
    slider.style.transform = `translateX(${currentTranslate}px)`
}