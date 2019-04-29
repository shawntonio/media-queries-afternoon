
const headers = document.getElementsByTagName('header')
const header = headers[0]

const sections = document.getElementsByTagName('section')
const lis = document.getElementsByTagName('li')


const h1 = document.getElementById('logo')

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

window.addEventListener('scroll', toggleHeader)

for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', () => scrollToSection(i))
}

