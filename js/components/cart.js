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
	if (boughtProducts.length > 0) {
		cartInsideInfo.classList.add('hidden')
		checkoutBtn.classList.add('active')
	} else {
		cartInsideInfo.classList.remove('hidden')
		checkoutBtn.classList.remove('active')
	}
}

function productInsideCart(number) {
	let totalPrice = (125 * `${number}`).toFixed(2)

	const newProduct = document.createElement('div')
	newProduct.className = 'cart-item'

	newProduct.innerHTML = `
        <img src="./images/products/image-product-1-thumbnail.jpg" alt="" aria-hidden="true" class="cart-item__image">
        
        <div class="cart-item__description">
        <p class="cart-item__description--name">Autumn Limited Edition Sneakers</p>
        <span class="cart-item__description--price">$125.00 x </span>
		<span class="cart-item__description--pieces">${number}</span> 
		<span class="cart-item__description--total">$${totalPrice}</span>
        </div>
        
		<button type="button" aria-label="Delete product from cart" class="cart-item__btn">
        <img src="./images/icons/icon-delete.svg" alt="Remove from cart icon" class="cart-item__btn--delete"></button>
    `

	productsCart.insertBefore(newProduct, checkoutBtn)
}

function addToCart() {
	if (boughtProducts.length > 0 && desiredProductPieces.textContent > 0) {
		let total = document.querySelector('.cart-item__description--total')
		let pieces = document.querySelector('.cart-item__description--pieces')

		pieces.textContent = Number(pieces.textContent) + Number(desiredProductPieces.textContent)

		let newPieces = Number(pieces.textContent)
		let newTotal = (125 * newPieces).toFixed(2)

		total.textContent = '$' + newTotal

		desiredProductPieces.textContent = 0
	}

	if (desiredProductPieces.textContent > 0) {
		productInsideCart(desiredProductPieces.textContent)
		desiredProductPieces.textContent = 0
	}
	handleEmptyCart()
}

function deleteProductFromCart(e) {
	if (e.target.closest('button > img')) {
		let parentElement = e.target.parentElement.parentElement
		parentElement.remove()
		handleEmptyCart()
	}
}

cartBtn.addEventListener('click', showCart)
selectionBox.addEventListener('click', e => numberOfProducts(e))
addToCartBtn.addEventListener('click', addToCart)
productsCart.addEventListener('click', e => deleteProductFromCart(e))
