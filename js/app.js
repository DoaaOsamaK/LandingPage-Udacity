/*
 *
 * CSS written based on SMACSS architecture.
 * To learn more, visit: http://smacss.com/
 * 
 * For simplicity, no reset or normalize is added. 
 * To learn more, visit: https://css-tricks.com/reboot-resets-reasoning/
 *
*/

/* ---- Base Rules ---- */
body {
    background: rgb(136,203,171);
    background: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);
    margin: 0;
    font-family: 'Merriweather', serif;
    color: #fff;
}

/* Typography General */
h1 {
    font-family: 'Fira Sans', sans-serif;
    font-size: 3em;
    margin: 2em 1rem;
}

@media only screen and (min-width: 35em){
    h1 {
        font-size: 7em;
        margin: 2em 4rem 1em;
    }
}

h2 {
    border-bottom: 1px solid #cc1;
    font-family: 'Oxygen', Sans-Serif;
    font-size: 3em;
    color: #fff;
}

p {
    line-height: 1.6em;
    color: #eee;
}

/* ---- Layout Rules ---- */
main {
    margin: 10vh 1em 10vh;
}

.main-hero {
    min-height: 40vh;
    padding-top: 3em;
}

section {
    position: relative;
    min-height: 80vh;
}

/* ---- Module Rules ---- */

/* Navigation Styles */
.navbar__menu ul {
    padding-left: 0;
    margin: 0;
    text-align: right;
}

.navbar__menu li {
    display: inline-block;
}

.navbar__menu .menu__link {
    display: block;
    padding: 1em;
    font-weight: bold;
    text-decoration: none;
    color: #000;
}

.navbar__menu .menu__link:hover {
    background: #333;
    color: #fff;
    transition: ease 0.3s all;
}

/* ✅ Active link style in nav */
.navbar__menu .menu__link.active-link {
    background-color: #cc1;
    color: #000;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
}

/* Header Styles */
.page__header {
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
}

/* Footer Styles */
.page__footer {
    background: #000;
    padding: 3em;
    color: #fff;
}

.page__footer p{
    color: #fff;
}

/* ---- Theme Rules ---- */
/* Landing Container Styles */
.landing__container {
    padding: 1em;
    text-align: left;
}

@media only screen and (min-width: 35em){
    .landing__container {
        max-width: 50em;
        padding: 4em;
    }
}

section:nth-of-type(even) .landing__container {
    margin-right: 0;
    margin-left: auto;
    text-align: right; 
}

/* Background Circles */
section:nth-of-type(odd) .landing__container::before {
    content: '';
    background: rgba(255, 255, 255, 0.187);
    position: absolute;
    z-index: -5;
    width: 20vh;
    height: 20vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(even) .landing__container::before {
    content: '';
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    top: 3em;
    right: 3em;
    z-index: -5;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(3n) .landing__container::after {
    content: '';
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -5;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(3n + 1) .landing__container::after {
    content: '';
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    right: 20vw;
    bottom: -5em;
    z-index: -5;
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

/* ---- Theme State Rules ---- */
section.your-active-class {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
}

section.your-active-class .landing__container::before {
    opacity: 1;
    animation: rotate 4s linear 0s infinite forwards;
}

section.your-active-class .landing__container::after {
    opacity: 1;
    animation: rotate 5s linear 0s infinite forwards reverse;
}

@keyframes rotate {
	from {
		transform: rotate(0deg) translate(-1em) rotate(0deg);
	}
	to {
		transform: rotate(360deg) translate(-1em) rotate(-360deg);
	}
}
