let stars = document.getElementById('tara');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    stars.style.left=value*0.25+'px';
    moon.style.top=value*1.05+'px';
    mountain.style.top=value*0.5+'px';
})