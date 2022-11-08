const mobileBtn = document.querySelector('.mobile__btn')
const mobileLinks = document.querySelector('.mobile__links')
const body = document.querySelector('body')
const openMenuIcon = document.querySelector('.img--menu-icon')
const closeMenuIcon = document.querySelector('.img--menu-close')

function showMobileMenu() {
	if (!mobileLinks.classList.contains('show-menu')) {
		mobileLinks.classList.add('show-menu')
		mobileLinks.classList.remove('hide-menu')
		openMenuIcon.classList.add('hidden')
		closeMenuIcon.classList.add('active')
		body.classList.add('background')
	} else {
		mobileLinks.classList.remove('show-menu')
		mobileLinks.classList.add('hide-menu')
		openMenuIcon.classList.remove('hidden')
		closeMenuIcon.classList.remove('active')
		setTimeout(() => body.classList.remove('background'), 400)
	}
}

mobileBtn.addEventListener('click', showMobileMenu)
