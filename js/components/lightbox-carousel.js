const productImages = document.querySelectorAll('.lightbox__main > img')
const [previousImageBtn, nextImageBtn] = document.querySelectorAll('.lightbox__btn')
const productLightbox = document.querySelector('.lightbox__main')
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
