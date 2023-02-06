console.log('carousel')

let slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

let indiceSlideAttiva = 0
const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

const rightBtnElement = document.querySelector('.carosello__freccia.arrow-right')
const leftBtnElement = document.querySelector('.carosello__freccia.arrow-left')

console.log(rightBtnElement)

rightBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)

	let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

	// inremento l'indice
	indiceSlideAttiva += 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})


leftBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)

    let slideCorrente = slideElements[indiceSlideAttiva]
	// togliendo la classe active
	slideCorrente.classList.remove('active')

    // decremento l'indice
	indiceSlideAttiva -= 1

    let prossimaSlide = slideElements[indiceSlideAttiva]
	// aggiungiamo la classe active alla seconda slide
	prossimaSlide.classList.add('active')
})