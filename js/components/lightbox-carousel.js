const productImages = document.querySelectorAll('.product-image__main > img')
const [previousImageBtn, nextImageBtn] = document.querySelectorAll('.product-image__btn')
const productLightbox = document.querySelector('.product-image__main')
let currentImage = 0

function showPreviousImage() {
	currentImage--

	if (0 >= currentImage) {
		currentImage = 0
	}

	changeImage(currentImage)
}

function showNextImage() {
	currentImage++

	if (productImages.length - 1 < currentImage) {
		currentImage = 0
	}

	changeImage(currentImage)
}

function changeImage(slide) {
	productImages.forEach((image, index) => (image.style.translate = `${100 * (index - slide)}%`))
}
changeImage(currentImage)

previousImageBtn.addEventListener('click', showPreviousImage)
nextImageBtn.addEventListener('click', showNextImage)
