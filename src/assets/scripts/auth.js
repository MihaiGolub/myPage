import "./modules/parallax"

window.onload = function() {
    const parallaxContainer = document.querySelector('.parallax');
    const layers = Array.from(parallaxContainer.children);
    const moveLayers = e => {
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    layers.forEach((layer, i) => {
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;
    const bottomPosition = (window.innerHeight / 2) * divider;
    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
    }
    window.addEventListener('mousemove', moveLayers)

    const openLogin = document.getElementById('login');
    const backFlip = document.getElementById('backFlip');
    const flipElements = document.querySelectorAll('.flip-element');
    openLogin.addEventListener('click', function ()  {
    for (var i = 0; i < flipElements.length; i++) {
    flipElements[i].classList.toggle('active');
    }});

    backFlip.addEventListener('click', function ()  {
    for (var i = 0; i < flipElements.length; i++) {
    flipElements[i].classList.toggle('active');
    }});
    };