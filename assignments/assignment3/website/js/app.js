const toggleNavigationIconHome = (navToggler) => {
    const navLinks = document.querySelector('.nav-links');
    const searchLinks = document.querySelector('.zoekbalk');
    const searchLinksIcon = document.querySelector('.fa-search');
    const row1Links = document.querySelector(".row1-links");
    const row2Links = document.querySelector(".row2-links");
    const row3Links = document.querySelector(".row3-links");
    const footerLinks = document.querySelector('.footer-links');
    const userIcon = document.querySelector('.user-icon');
    const loginLinks = document.getElementById('login-text');
    loginLinks.classList.toggle('toggled');
    userIcon.classList.toggle('fa-user');
    footerLinks.classList.toggle('toggled');
    row1Links.classList.toggle('toggled');
    row2Links.classList.toggle('toggled');
    row3Links.classList.toggle('toggled');
    searchLinksIcon.classList.toggle('toggled');
    searchLinks.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleNavigationIconList = (navToggler) => {
    const navLinks = document.querySelector('.nav-links');
    const searchLinks = document.querySelector('.zoekbalk');
    const searchLinksIcon = document.querySelector('.fa-search');
    const row1Links = document.querySelector(".row1-links");
    const footerLinks = document.querySelector('.footer-links');
    const articleLinks = document.querySelector('.article-no');
    articleLinks.classList.toggle('toggled');
    const userIcon = document.querySelector('.user-icon');
    const loginLinks = document.getElementById('login-text');
    loginLinks.classList.toggle('toggled');
    userIcon.classList.toggle('fa-user');
    footerLinks.classList.toggle('toggled');
    row1Links.classList.toggle('toggled');
    searchLinksIcon.classList.toggle('toggled');
    searchLinks.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleNavigationIconDetail = (navToggler) => {
    const navLinks = document.querySelector('.nav-links');
    const searchLinks = document.querySelector('.zoekbalk');
    const searchLinksIcon = document.querySelector('.fa-search');
    const mainLinks = document.querySelector('.no-detail');
    const footerLinks = document.querySelector('.footer-links');
    const userIcon = document.querySelector('.user-icon');
    const loginLinks = document.getElementById('login-text');
    loginLinks.classList.toggle('toggled');
    userIcon.classList.toggle('fa-user');
    mainLinks.classList.toggle('toggled');
    footerLinks.classList.toggle('toggled');
    searchLinksIcon.classList.toggle('toggled');
    searchLinks.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleNavigationIconContact = (navToggler) => {
    const navLinks = document.querySelector('.nav-links');
    const searchLinks = document.querySelector('.zoekbalk');
    const searchLinksIcon = document.querySelector('.fa-search');
    const footerLinks = document.querySelector('.footer-links');
    const mainLinks = document.querySelector('.no-contact');
    const userIcon = document.querySelector('.user-icon');
    const loginLinks = document.getElementById('login-text');
    loginLinks.classList.toggle('toggled');
    userIcon.classList.toggle('fa-user');
    mainLinks.classList.toggle('toggled');
    footerLinks.classList.toggle('toggled');
    searchLinksIcon.classList.toggle('toggled');
    searchLinks.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleDropdownNavigation = (dropdownToggler) => {
    dropdownToggler.classList.toggle('toggled');
}