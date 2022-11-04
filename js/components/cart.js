const cartBtn = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container')
const cartIcon = cartBtn.querySelector('img')
const selectionBox = document.querySelector('.selection-box')
const checkoutBtn = document.querySelector('.cart-container__storage--checkout')
const productsCart = document.querySelector('.cart-container__storage')
const addToCartBtn = document.querySelector('.product-info__add')
const cartInsideInfo = document.querySelector('.cart-container__storage--info')
const boughtProducts = document.getElementsByClassName('cart-item')
let desiredProductPieces = document.querySelector('.selection-box__number')

function displayNumber(value = 0) {
	desiredProductPieces.textContent = `${value}`
}
displayNumber()

function showCart() {
	if (!cartContainer.classList.contains('active')) {
		cartContainer.classList.add('active')
		cartIcon.style.filter = 'brightness(0) saturate(100%)'
	} else {
		cartContainer.classList.remove('active')
		cartIcon.style.filter = ''
	}
}

function numberOfProducts(e) {
	let number = desiredProductPieces.textContent

	if (e.target.dataset.value == 'minus') {
		if (number <= 0) {
			return
		} else {
			number--
			displayNumber(number)
		}
	}

	if (e.target.dataset.value == 'plus') {
		number++
		displayNumber(number)
	}
}

function handleEmptyCart() {
	console.log(productsCart.contains(boughtProducts))
	// console.log(boughtProducts)

	if (productsCart.contains(div)) {
		// console.log('lol')
		cartInsideInfo.classList.add('hidden')
		checkoutBtn.classList.add('active')
	}
}

// console.log(productsCart.contains(boughtProducts))

function productInsideCart(number) {
	let price = '$' + `125.00*${number}`

	const newProduct = document.createElement('div')
	newProduct.className = 'cart-item'

	newProduct.innerHTML = `
        <img src="./images/products/image-product-1-thumbnail.jpg" alt="" aria-hidden="true" class="cart-item__image">
        
        <div class="cart-item__description">
        <p class="cart-item__description--name">Autumn Limited Edition Sneakers</p>
        <span class="cart-item__description--pieces">$125.00 x ${number}</span> <span class="cart-item__description--price">${price}</span>
        </div>
        
        <img src="./images/icons/icon-delete.svg" alt="Remove from cart icon" class="cart-item__delete">
    `

	productsCart.insertBefore(newProduct, checkoutBtn)
}

function addToCart() {
	if (desiredProductPieces.textContent > 0) {
		productInsideCart(desiredProductPieces.textContent)
		desiredProductPieces.textContent = 0
	}

	handleEmptyCart()
}

cartBtn.addEventListener('click', showCart)
selectionBox.addEventListener('click', e => numberOfProducts(e))
addToCartBtn.addEventListener('click', addToCart)
