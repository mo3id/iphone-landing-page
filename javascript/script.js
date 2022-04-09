let mainImg = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone){
    mainImg.src = phone;
}

function colors(color){
    container.style.background = color;
}