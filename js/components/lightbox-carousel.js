const productImages = document.querySelectorAll('.lightbox__main > img')
const [previousImageBtn, nextImageBtn] = document.querySelectorAll('.lightbox__btn')
const productLightbox = document.querySelector('.lightbox__main')
const thumbnailsContainer = document.querySelector('.thumbnails')
const thumbnailsImages = document.querySelectorAll('.thumbnails__img')
const modal = document.querySelector('.lightbox-modal')
const closeModalBtn = document.querySelector('.lightbox-modal__btn')
let modalImage = document.querySelector('.lightbox-modal__img')
let currentLightboxImage = 0

function showPreviousImage() {
	currentLightboxImage--

	if (0 >= currentLightboxImage) {
		currentLightboxImage = 0
	}

	changeLightboxImage(currentLightboxImage)
	distinctThumbailImage(currentLightboxImage)
}

function showNextImage() {
	currentLightboxImage++

	if (productImages.length - 1 < currentLightboxImage) {
		currentLightboxImage = 0
	}

	changeLightboxImage(currentLightboxImage)
	distinctThumbailImage(currentLightboxImage)
}

function changeLightboxImage(slide) {
	productImages.forEach((image, index) => (image.style.translate = `${100 * (index - slide)}%`))
}
changeLightboxImage(currentLightboxImage)

function distinctThumbailImage(index) {
	thumbnailsImages.forEach(img => {
		img.classList.remove('distincted')
	})

	thumbnailsImages[index].classList.add('distincted')
}
distinctThumbailImage(currentLightboxImage)

function changeDesktopImage(e) {
	if (e.target.closest('img')) {
		let imageNumber = e.target.dataset.number - 1
		changeLightboxImage(imageNumber)
		distinctThumbailImage(imageNumber)
	}
}

function showModal(e) {
	if (window.innerWidth > 768) {
		modalImage.src = e.target.src
		modal.showModal()
	}
}

previousImageBtn.addEventListener('click', showPreviousImage)
nextImageBtn.addEventListener('click', showNextImage)
thumbnailsContainer.addEventListener('click', changeDesktopImage)
productLightbox.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', () => {
	modal.close()
})
