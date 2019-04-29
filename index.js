
const headers = document.getElementsByTagName('header')
const header = headers[0]

const sections = document.getElementsByTagName('section')
const lis = document.getElementsByClassName('list')
const lis2 = document.getElementsByClassName('list2')

const h1 = document.getElementById('logo')
const menu = document.getElementById('menu')
const links = document.getElementById('links')

function toggleHeader() {
	// console.dir(sections[1])
	if (scrollY > 99) {
		header.classList.add('give-bcc')
		h1.classList.add('remove-margin')
	} else {
		header.classList.remove('give-bcc')
		h1.classList.remove('remove-margin')
	}
}

function scrollToSection(section) {
	// window.scrollTo(0, sections[section+1].offsetTop)
	window.scrollTo({
		top: sections[section+1].offsetTop - 60,
		behavior: 'smooth'
	})
}

function toggleMenu() {
	if (links.classList.contains('show-list')) {
		links.classList.remove('show-list')
		links.classList.add('hide-list')
	} else {
		links.classList.remove('hide-list')
		links.classList.add('show-list')
	}
}

window.addEventListener('scroll', toggleHeader)
menu.addEventListener('click', toggleMenu)

for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', () => scrollToSection(i))
}
for (let i = 0; i < lis2.length; i++) {
	lis2[i].addEventListener('click', () => scrollToSection(i))
}

