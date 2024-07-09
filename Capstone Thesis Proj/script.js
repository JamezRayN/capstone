function changeBg(){
    var navbar = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 100 ){
        navbar.classList.remove('xroll');
    } else{
        navbar.classList.add( 'xroll' );
    }
}

window.addEventListener('scroll', changeBg);
//
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');
    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

