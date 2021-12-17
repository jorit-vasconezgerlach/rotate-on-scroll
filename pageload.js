let cube = document.getElementsByClassName('cube')[0];
window.onscroll = function() {
    cube.style.transform = 'translate(-50%, -50%) rotate('+window.pageYOffset/10+'deg)';
}