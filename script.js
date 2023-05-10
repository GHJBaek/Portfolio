


const navButton = document.querySelector('.menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.dropLink');

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


// close menu when link is clicked
const closeMenu = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('dropDownMenu')) {
                navMenu.classList.remove('dropDownMenu');
                navMenu.classList.add('openNav');
                navButton.classList.toggle('is-active');
            }
        })
    })
}

const handleSubmit = () => {

    const handleForm = document.querySelector('.contactForm');

    handleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => navigate("/thank-you/"))
            .catch((error) => alert(error));
    });
}
handleSubmit();
closeMenu();
