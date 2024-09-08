'use strict';
document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.nav');
	const navbarToggle = document.querySelector('[data-menu-btn]');
	const navbarClose = document.querySelector('[data-menu-close]');
	const navbarList = document.querySelector('.nav__list');

	document.addEventListener('click', (e) => {
		// NAVBAR
		if (e.target === navbarToggle) {
			navbar.classList.toggle('active');
		} else if (e.target === navbarClose || e.target != navbarList) {
			navbar.classList.remove('active');
		}
	});
});
