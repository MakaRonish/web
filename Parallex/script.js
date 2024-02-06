let stars = document.getElementById('tara');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let bottomSection = document.querySelector('.bottom');

// window.addEventListener('scroll',function(){
//     let value = this.window.scrollY;

//     stars.style.left=value*0.25+'px';
//     moon.style.top=value*1.05+'px';
//     mountain.style.top=value*0.5+'px';
// })

window.addEventListener('scroll', function(){
    let windowHeight = window.innerHeight;
    let bottomSectionHeight = bottomSection.offsetHeight;
    let bottomSectionTop = bottomSection.offsetTop;
    let scrollPosition = window.scrollY;

    // Calculate the maximum scroll position
    let maxScroll = bottomSectionTop + bottomSectionHeight - windowHeight;

    // Ensure the scroll position stays within the defined range
    if (scrollPosition <= maxScroll && scrollPosition >= bottomSectionTop - windowHeight) {
        stars.style.left = scrollPosition * 0.25 + 'px';
        moon.style.top = scrollPosition * 1.05 + 'px';
        mountain.style.top = scrollPosition * 0.5 + 'px';
    }
});