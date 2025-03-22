/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const navbar = document.querySelector('.page__header');
let scrollToTopBtn;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.section-content');
    const icon = section.querySelector('i');

    content.classList.toggle('collapsed');

    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');

    if (content.classList.contains('collapsed')) {
        section.style.minHeight = 'auto';
        section.style.height = 'auto';
    } else {
        section.style.minHeight = '80vh';
        section.style.height = 'auto';
    }
}

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.classList.add('scroll-to-top-btn');

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-arrow-up');
    scrollToTopBtn.appendChild(icon);

    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function buildNavMenu() {
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.getAttribute('data-nav');
        navLink.setAttribute('href', `#${section.id}`);
        navLink.classList.add('menu__link');
        navItem.appendChild(navLink);
        navList.appendChild(navItem);

        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = navLink.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setActiveSection() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('your-active-class');
            const navLinks = navList.querySelectorAll('.menu__link');
            navLinks.forEach(link => {
                if (link.getAttribute('href').slice(1) === section.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        } else {
            section.classList.remove('your-active-class');
        }
    });

    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('DOMContentLoaded', function() {
    buildNavMenu();
    createScrollToTopButton();
});

window.addEventListener('scroll', function() {
    setActiveSection();
});

let scrollTimeout;

window.addEventListener('scroll', function() {
    navbar.style.display = 'block';

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
        navbar.style.display = 'none';
    }, 5000);
});
