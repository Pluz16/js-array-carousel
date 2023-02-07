console.log('carousel')

let slides = document.querySelectorAll('.carosello .slide')
ElementiSlides = [...slides]

console.log(ElementiSlides)

// Recupero controlli
const freccia_sx= document.getElementById('freccia_sx')
const freccia_dx= document.getElementById('freccia_dx')

let currentIndex = 0


// Aggancio ad eventlistener
freccia_sx.addEventListener('click', function(){
	console.log('prev slide')

	if (currentIndex > 0){
	// nascondo attiva
	ElementiSlides[currentIndex].classList.remove('active')

	// mostro precedente
	console.log(ElementiSlides[currentIndex - 1])
	ElementiSlides[currentIndex - 1].classList.add('active')

	currentIndex--
	}
})

freccia_dx.addEventListener('click', function(){
	console.log('next slide')

	const lastIndex = ElementiSlides.lenght - 1

	if(currentIndex < lastIndex) {

	// Nascondo attiva
	ElementiSlides[currentIndex].classList.remove('active')

	// mostro successiva
	ElementiSlides[currentIndex + 1].classList.add('active')

	// aggiorno currentIndex
	currentIndex += 1
	}
})


