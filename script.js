let splash = document.getElementById('splash');
let text = document.getElementById('text');
let baloon1 = document.getElementById('baloon1');
let baloon2 = document.getElementById('baloon2');
let baloon3 = document.getElementById('baloon3');
let decoration1 = document.getElementById('decoration1');
let decoration2 = document.getElementById('decoration2');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let watergun1 = document.getElementById('watergun1');
let watergun2 = document.getElementById('watergun2');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    splash.style.top = value * 0.75 + 'px';
    text.style.top = value * 0.25 + 'px';
    decoration1.style.top = value * 0.5 + 'px';
    baloon1.style.top = value * -3.25 + 'px';
    baloon2.style.top = value * -0.5 + 'px';
    baloon3.style.top = value * -2 + 'px';
    color1.style.top = value * -0.25 + 'px';
    color2.style.top = value * -0.75 + 'px';
    watergun1.style.left = value * -0.75 + 'px';
    watergun2.style.left = value * 0.75 + 'px';
})