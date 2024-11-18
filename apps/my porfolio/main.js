 // Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
// let sections = document.querySelectorAll('section'); // Query all sections
// let navLinks = document.querySelectorAll('header nav a'); // Query all nav links

// const menuIcon = document.querySelector("#menu-icon");
// const navbar = document.querySelector(".navbar");

// menuIcon.addEventListener("click", () => {
//     navbar.classList.toggle("active");
// });

// Close navbar on link click (for single-page navigation)
// document.querySelectorAll(".navbar a").forEach(link => {
//     link.addEventListener("click", () => {
//         navbar.classList.remove("active");
//     });
// }); 

// const menuIcon = document.getElementById('menu-icon');
// const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150; // Adjust offset for better activation timing
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active'); // Remove active class from all links
//                 document.querySelector(`header nav a[href="#${id}"]`).classList.add('active'); // Add active class to the matching link
//             });
//         }
//     });

//     // Sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove toggle icon and navbar when a scroll event occurs
//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };

// ScrollReveal animation
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js implementation
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Frontend Developer', 'Java Developer', 'SQL'], // Strings to type
    typeSpeed: 70, // Speed for typing
    backSpeed: 70, // Speed for backspacing
    backDelay: 1000, // Delay before backspacing
    loop: true, // Loop typing
});
