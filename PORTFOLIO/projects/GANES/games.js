var bannerDiv = document.querySelector('#banner1');
var divxElements = document.querySelectorAll('.divx');

divxElements.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        var backgroundImage = getComputedStyle(this).getPropertyValue('background-image');
        bannerDiv.style.backgroundImage = backgroundImage;
    });
});

divxElements.forEach(function (element) {
    element.addEventListener('mouseout', function () {
        bannerDiv.style.backgroundImage = "url('img/witcher3.jpg')"
    });
});

var bannerDiv2 = document.querySelector('#banner2');
var divxElements2 = document.querySelectorAll('.divx2');

divxElements2.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        var backgroundImage = getComputedStyle(this).getPropertyValue('background-image');
        bannerDiv2.style.backgroundImage = backgroundImage;
    });
});

divxElements2.forEach(function (element) {
    element.addEventListener('mouseout', function () {
        bannerDiv2.style.backgroundImage = "url('img/ac4.jpg')"
    });
});

var bannerDiv3 = document.querySelector('#banner3');
var divxElements3 = document.querySelectorAll('.divx3');

divxElements3.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        var backgroundImage = getComputedStyle(this).getPropertyValue('background-image');
        bannerDiv3.style.backgroundImage = backgroundImage;
    });
});

divxElements3.forEach(function (element) {
    element.addEventListener('mouseout', function () {
        bannerDiv3.style.backgroundImage = "url('img/fc3.jpg')"
    });
});

function showDiv(num) {
    var divs = document.getElementsByClassName("banner-cont");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    document.getElementById("div" + num).style.display = "flex";
}

function showDiv2(num) {
    var divs = document.getElementsByClassName("banner-cont2");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    
    document.getElementById("ddiv" + num).style.display = "flex";
}

function fade(){
    var div1 = document.getElementById("ddiv1");
    var div2 = document.getElementById("ddiv2");

    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
}

const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");


openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
