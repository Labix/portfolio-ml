const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

function openPopup() {
            var overlay = document.getElementById("overlay");
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden";
        }

        function closePopup() {
            var overlay = document.getElementById("overlay");
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }

function openPopup2() {
    var overlay = document.getElementById("overlayx");
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePopup2() {
    var overlay = document.getElementById("overlayx");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
}


const thumbnail = document.querySelector('#div1');
const XD = document.querySelector('#XD1');
const XD2 = document.querySelector('#XD2');
const XD3 = document.querySelector('#XD3');
const XD4 = document.querySelector('#XD4');
const closeBtn = document.querySelector('#close1');
const closeBtn2 = document.querySelector('#close2');
const closeBtn3 = document.querySelector('#close3');
const closeBtn4 = document.querySelector('#close4');
var overlay2 = document.getElementById("overlay2");
var hide = document.querySelector('.hide');
var overlay = document.getElementById("overlay");

function showHiddenDiv(){
    XD.style.display = "flex";
    hide.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
}

function showHiddenDiv2() {
    XD2.style.display = "flex";
    hide.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
}
function showHiddenDiv3() {
    XD3.style.display = "flex";
    hide.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
}
function showHiddenDiv4() {
    XD4.style.display = "flex";
    hide.style.display = 'block';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
}    


closeBtn.addEventListener('click', () => {
    XD.style.display = 'none';
    hide.style.display = 'none';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
});

closeBtn2.addEventListener('click', () => {
    XD2.style.display = 'none';
    hide.style.display = 'none';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
});
closeBtn3.addEventListener('click', () => {
    XD3.style.display = 'none';
    hide.style.display = 'none';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
});
closeBtn4.addEventListener('click', () => {
    XD4.style.display = 'none';
    hide.style.display = 'none';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
});

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".slider-prev-btn");
const nextButton = document.querySelector(".slider-next-btn");
const slideWidth = document.querySelector(".slider-item").clientWidth;
let currentSlide = 0;

function slideToCurrent() {
    slider.style.transform = `translateX(-${currentSlide * 600}px)`;
}

prevButton.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = 1;
    } else {
        currentSlide--;
    }
    slideToCurrent();
});

nextButton.addEventListener("click", () => {
    if (currentSlide === 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slideToCurrent();
});

slideToCurrent();

var currentDate = new Date();
var day = currentDate.getDate();
var dayOfWeek = currentDate.getDay();

var currentdaynumber = document.querySelector('#currentDaynumber');
var currentdaynumber2 = document.querySelector('#currentDaynumber2');
var currentdaynumber3 = document.querySelector('#currentDaynumber3');
var currentdaynumber4 = document.querySelector('#currentDaynumber4');
var currentdaynumber5 = document.querySelector('#currentDaynumber5');
var currentdaynumber6 = document.querySelector('#currentDaynumber6');
var currentdaynumber7 = document.querySelector('#currentDaynumber7');
var currentdaynumber8 = document.querySelector('#currentDaynumber8');
currentdaynumber.textContent = day;
currentdaynumber2.textContent = day+1;
currentdaynumber3.textContent = day+2;
currentdaynumber4.textContent = day+3;
currentdaynumber5.textContent = day+4;
currentdaynumber6.textContent = day+5;
currentdaynumber7.textContent = day+6;
currentdaynumber8.textContent = day+7;

var currentDay = document.querySelector('#currentDay');
var currentDay2 = document.querySelector('#currentDay2');
var currentDay3 = document.querySelector('#currentDay3');
var currentDay4 = document.querySelector('#currentDay4');
var currentDay5 = document.querySelector('#currentDay5');
var currentDay6 = document.querySelector('#currentDay6');
var currentDay7 = document.querySelector('#currentDay7');
var currentDay8 = document.querySelector('#currentDay8');

if (dayOfWeek === 0) {
    currentDay.textContent = 'Sunday';
    currentDay2.textContent = 'Monday';
    currentDay3.textContent = 'Tuesday';
    currentDay4.textContent = 'Wednesday';
    currentDay5.textContent = 'Thursday';
    currentDay6.textContent = 'Friday';
    currentDay7.textContent = 'Saturday';
    currentDay8.textContent = 'Sunday';
} else if (dayOfWeek === 1) {
    currentDay.textContent = 'Monday';
    currentDay2.textContent = 'Tuesday';
    currentDay3.textContent = 'Wednesday';
    currentDay4.textContent = 'Thursday';
    currentDay5.textContent = 'Friday';
    currentDay6.textContent = 'Saturday';
    currentDay7.textContent = 'Sundau';
    currentDay8.textContent = 'Monday';
} else if (dayOfWeek === 2) {
    currentDay.textContent = 'Tuesday';
    currentDay2.textContent = 'Wednesday';
    currentDay3.textContent = 'Thursday';
    currentDay4.textContent = 'Friday';
    currentDay5.textContent = 'Saturday';
    currentDay6.textContent = 'Sunday';
    currentDay7.textContent = 'Monday';
    currentDay8.textContent = 'Tuesday';
} else if (dayOfWeek === 3) {
    currentDay.textContent = 'Wednesday';
    currentDay2.textContent = 'Thursday';
    currentDay3.textContent = 'Friday';
    currentDay4.textContent = 'Saturday';
    currentDay5.textContent = 'Sanday';
    currentDay6.textContent = 'Monday';
    currentDay7.textContent = 'Tuesday';
    currentDay8.textContent = 'Wednesday';
} else if (dayOfWeek === 4) {
    currentDay.textContent = 'Thursday';
    currentDay2.textContent = 'Friday';
    currentDay3.textContent = 'Saturday';
    currentDay4.textContent = 'Sunday';
    currentDay5.textContent = 'Monday';
    currentDay6.textContent = 'Tuesday';
    currentDay7.textContent = 'Wednesday';
    currentDay8.textContent = 'Thursday';
} else if (dayOfWeek === 5) {
    currentDay.textContent = 'Friday';
    currentDay2.textContent = 'Saturday';
    currentDay3.textContent = 'Sunday';
    currentDay4.textContent = 'Monday';
    currentDay5.textContent = 'Tuesday';
    currentDay6.textContent = 'Wednesday';
    currentDay7.textContent = 'Thursday';
    currentDay8.textContent = 'Friday';
} else if (dayOfWeek === 6) {
    currentDay.textContent = 'Saturday';
    currentDay2.textContent = 'Sunday';
    currentDay3.textContent = 'Monday';
    currentDay4.textContent = 'Tuesday';
    currentDay5.textContent = 'Wednesday';
    currentDay6.textContent = 'Thursday';
    currentDay7.textContent = 'Friday';
    currentDay8.textContent = 'Saturday';
}

var currentDayShort = document.querySelector('#currentDayshort')
var currentDayShort2 = document.querySelector('#currentDayshort2')
var currentDayShort3 = document.querySelector('#currentDayshort3')
var currentDayShort4 = document.querySelector('#currentDayshort4')
var currentDayShort5 = document.querySelector('#currentDayshort5')
var currentDayShort6 = document.querySelector('#currentDayshort6')
var currentDayShort7 = document.querySelector('#currentDayshort7')
var currentDayShort8 = document.querySelector('#currentDayshort8')

if (dayOfWeek === 0) {
    currentDayShort.textContent = 'Sun';
    currentDayShort2.textContent = 'Mon';
    currentDayShort3.textContent = 'Tue';
    currentDayShort4.textContent = 'Wed';
    currentDayShort5.textContent = 'Thu';
    currentDayShort6.textContent = 'Fri';
    currentDayShort7.textContent = 'Sat';
    currentDayShort8.textContent = 'Sun';
} else if (dayOfWeek === 1) {
    currentDayShort.textContent = 'Mon';
    currentDayShort2.textContent = 'Tue';
    currentDayShort3.textContent = 'Wed';
    currentDayShort4.textContent = 'Thu';
    currentDayShort5.textContent = 'Fri';
    currentDayShort6.textContent = 'Sat';
    currentDayShort7.textContent = 'Sun';
    currentDayShort8.textContent = 'Mon';
} else if (dayOfWeek === 2) {
    currentDayShort.textContent = 'Tue';
    currentDayShort2.textContent = 'Wed';
    currentDayShort3.textContent = 'Thu';
    currentDayShort4.textContent = 'Fri';
    currentDayShort5.textContent = 'Sat';
    currentDayShort6.textContent = 'Sun';
    currentDayShort7.textContent = 'Mon';
    currentDayShort8.textContent = 'Tue';
} else if (dayOfWeek === 3) {
    currentDayShort.textContent = 'Wed';
    currentDayShort2.textContent = 'Thu';
    currentDayShort3.textContent = 'Fri';
    currentDayShort4.textContent = 'Sat';
    currentDayShort5.textContent = 'Sun';
    currentDayShort6.textContent = 'Mon';
    currentDayShort7.textContent = 'Tue';
    currentDayShort8.textContent = 'Wed';
} else if (dayOfWeek === 4) {
    currentDayShort.textContent = 'Thu';
    currentDayShort2.textContent = 'Fri';
    currentDayShort3.textContent = 'Sat';
    currentDayShort4.textContent = 'Sun';
    currentDayShort5.textContent = 'Mon';
    currentDayShort6.textContent = 'Tue';
    currentDayShort7.textContent = 'Wed';
    currentDayShort8.textContent = 'Thu';
} else if (dayOfWeek === 5) {
    currentDayShort.textContent = 'Fri';
    currentDayShort2.textContent = 'Sat';
    currentDayShort3.textContent = 'Sun';
    currentDayShort4.textContent = 'Mon';
    currentDayShort5.textContent = 'Tue';
    currentDayShort6.textContent = 'Wed';
    currentDayShort7.textContent = 'Thu';
    currentDayShort8.textContent = 'Fri';
} else if (dayOfWeek === 6) {
    currentDayShort.textContent = 'Sat';
    currentDayShort2.textContent = 'Sun';
    currentDayShort3.textContent = 'Mon';
    currentDayShort4.textContent = 'Tue';
    currentDayShort5.textContent = 'Wed';
    currentDayShort6.textContent = 'Thu';
    currentDayShort7.textContent = 'Fri';
    currentDayShort8.textContent = 'Sat';
}

function changeBorderColor(){
    var div = document.querySelector('.house-card');
    var divx = documeny.getElementById('card1');
    div.classList.toogle('active');
}

function changeBorderColor2() {
    var div = document.getElementById('myDiv');
    div.classList.toggle('active');
}

const divs = document.querySelectorAll('.house-card')

divs.forEach(div=>{
    div.addEventListener('click', () =>{
        divs.forEach(div => div.classList.remove('active'));
        div.classList.add('active');
    });
});

window.addEventListener('scroll', function () {
    var stickyElement = document.querySelector('.navmobile');
    var rect = stickyElement.getBoundingClientRect();
    if (rect.top <= 0) {
        stickyElement.classList.add('sticky');
    } else {
        stickyElement.classList.remove('sticky');
    }
});