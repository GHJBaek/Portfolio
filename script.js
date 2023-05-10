


const navButton = document.querySelector('.menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('a');

navButton.addEventListener('click', function () {
    navButton.classList.toggle('is-active');
    if (navMenu.classList.contains('openNav')) {
        navMenu.classList.remove('openNav');
        navMenu.classList.add('dropDownMenu');
    } else {
        navMenu.classList.remove('dropDownMenu');
        navMenu.classList.add('openNav');
    }

});

const closeMenu =() => {
    navLinks.addEventListener('click', function () {
        if(navMenu.classList.contains('dropDownMenu')){
            navMenu.classList.remove('dropDownMenu');
            navMenu.classList.add('openNav');
        }
})};

closeMenud();