const cartBtn = document.querySelector('.cart__btn')
const cartContainer = document.querySelector('.cart-container')
const cartIcon = cartBtn.querySelector('img')
const selectionBox = document.querySelector('.selection-box')
const checkoutBtn = document.querySelector('.cart-container__btn')
const productsCart = document.querySelector('.cart-container__storage')
const addToCartBtn = document.querySelector('.cart-add')
const cartInsideInfo = document.querySelector('.cart-container__info')
const boughtProducts = document.getElementsByClassName('cart-item')
const quantityOfProducts = document.querySelector('.cart__goods')
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

function showQuantityofProductsInCards() {
	if (boughtProducts.length > 0) {
		let pieces = document.querySelector('.cart-item__pieces').textContent

		quantityOfProducts.textContent = pieces
		quantityOfProducts.classList.add('active')
	} else {
		quantityOfProducts.classList.remove('active')
	}
}

function numberOfProducts(e) {
	if (e.target.dataset.value == 'minus') {
		desiredProductPieces.stepDown()
		displayNumber(desiredProductPieces)
	}

	if (e.target.dataset.value == 'plus') {
		desiredProductPieces.stepUp()
		displayNumber(desiredProductPieces)
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
        <p class="cart-item__name">Autumn Limited Edition Sneakers</p>
        <span class="cart-item__price">$125.00 x </span>
		<span class="cart-item__pieces">${number}</span> 
		<span class="cart-item__total">$${totalPrice}</span>
        </div>
        
		<button type="button" aria-label="Delete product from cart" class="cart-item__btn btn">
        <img src="./images/icons/icon-delete.svg" alt="Remove from cart icon" class="cart-item__delete-icon"></button>
    `

	productsCart.insertBefore(newProduct, checkoutBtn)
}

function addToCart() {
	if (boughtProducts.length > 0 && desiredProductPieces.value > 0) {
		let total = document.querySelector('.cart-item__total')
		let pieces = document.querySelector('.cart-item__pieces')

		pieces.textContent = Number(pieces.textContent) + Number(desiredProductPieces.value)

		let newPieces = Number(pieces.textContent)
		let newTotal = (125 * newPieces).toFixed(2)
		total.textContent = '$' + newTotal

		desiredProductPieces.value = 0
	}

	if (desiredProductPieces.value > 0) {
		productInsideCart(desiredProductPieces.value)
		desiredProductPieces.value = 0
	}
	handleEmptyCart()
	showQuantityofProductsInCards()
}

function deleteProductFromCart(e) {
	if (e.target.closest('button > img')) {
		let parentElement = e.target.parentElement.parentElement
		parentElement.remove()
		handleEmptyCart()
		showQuantityofProductsInCards()
	}
}

cartBtn.addEventListener('click', showCart)
selectionBox.addEventListener('click', e => numberOfProducts(e))
addToCartBtn.addEventListener('click', addToCart)
productsCart.addEventListener('click', e => deleteProductFromCart(e))
