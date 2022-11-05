const productImages = document.querySelectorAll('.product-image__main > img')
const [previousImageBtn, nextImageBtn] = document.querySelectorAll('.product-image__btn')
const productLightbox = document.querySelector('.product-image__main')

function showPreviousImage() {
	// console.log('prev')
	productLightbox.style.translate = '100%'
}

function showNextImage() {
	// console.log('next')

	productLightbox.style.translate = '-100%'
}

previousImageBtn.addEventListener('click', showPreviousImage)
nextImageBtn.addEventListener('click', showNextImage)
