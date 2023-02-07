console.log('carousel')

let slides = document.querySelectorAll('.carosello .slide')
ElementiSlides = [...slides]

console.log(ElementiSlides)

// Recupero controlli
const freccia_sx= document.getElementById('freccia_sx')
const freccia_dx= document.getElementById('freccia_dx')


// Aggancio ad eventlistener
freccia_sx.addEventListener('click', function(){
	console.log('prev slide')
})

freccia_dx.addEventListener('click', function(){
	console.log('next slide')
})

