/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * JS Version: ES2015/ES6
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const navbar = document.querySelector('.page__header');
let scrollToTopBtn;

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
    let activeSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -200 && rect.top <= 200) {
            activeSection = section;
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });

    const navLinks = navList.querySelectorAll('.menu__link');
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        if (activeSection && sectionId === activeSection.id) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });

    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

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
