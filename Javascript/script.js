// Start Toogle Navbar Funcion

var barsBtn = document.getElementById("bars"),
closeBtn = document.getElementById("close"),
navBar = document.getElementById("navbar");

function toggleClass() {
    navBar.classList.toggle('hide');
}

barsBtn.addEventListener("click", () => {
    toggleClass()
})

closeBtn.addEventListener("click", () => {
    toggleClass()
});

// Navbar Links

var navLinks = document.querySelectorAll(".navbar .nav-links li a");

navLinks.forEach(link => {

    link.addEventListener('click', event => {

    event.preventDefault();
    
    navLinks.forEach(link => {

        link.classList.remove('active');

    });

    event.target.classList.add('active');

    console.log('Link clicked');
    
    });
});

// The Links In Portfolio

var buttons = document.querySelectorAll('.portfolio ul.buttons li button');

buttons.forEach(link => {

    link.addEventListener('click', () => {

        buttons.forEach(link => {

            link.classList.remove('active');

        });

        link.classList.add('active');
    });
});

// Scroll To Top Button

var upButton = document.getElementById("upp");

window.addEventListener("scroll", () => {

    if (window.scrollY > 700) {
        upButton.classList.remove("hide");
    } else {
        upButton.classList.add("hide");
    };

});

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

// Scroll To Top Links

var links = document.querySelectorAll(".header .nav-links li:not(:last-child) a");

links.forEach(link => {
	link.addEventListener("click", (e) => {
		var countHeight = document.getElementById(link.getAttribute("data-top"));

		window.scrollTo({
			top: countHeight.offsetTop,
			behavior: "smooth",
		});

		
		links.forEach(link => {
			link.classList.remove('active');
		});
		
		link.classList.add('active');
		
		e.preventDefault();
	});
});
// This Is The End Of This Website