const shirt = document.getElementById('store-shirt');
const pants = document.getElementById('store-pants');
const belt = document.getElementById('store-belt');
const boots = document.getElementById('store-boots');

const removeShirt = document.getElementById('shirt-delete');
const removePants = document.getElementById('pants-delete');
const removeBelt = document.getElementById('belt-delete');
const removeBoots = document.getElementById('boots-delete');

const cartPrice = document.getElementById('cart-price');
const cartCount = document.getElementById('cart-count');

const checkoutButton = document.getElementById('checkout-button');

var shirtCount = 0;
var pantsCount = 0;
var beltCount = 0;
var bootsCount = 0;

var price = 0;
var count = 0;

shirt.addEventListener('click', () => {
	shirtCount++;
	count++;
	price += 25;
	cartCount.textContent = count;
	cartPrice.textContent = "$" + price;
});
pants.addEventListener('click', () => {
	pantsCount++;
	count++;
	cartCount.textContent = count;
	price += 40;
	cartPrice.textContent = "$" + price;
});
belt.addEventListener('click', () => {
	beltCount++;
	count++;
	cartCount.textContent = count;
	price += 15;
	cartPrice.textContent = "$" + price;
});
boots.addEventListener('click', () => {
	bootsCount++;
	count++;
	cartCount.textContent = count;
	price += 60;
	cartPrice.textContent = "$" + price;
});

removeShirt.addEventListener('click', () => {
	if (shirtCount > 0) {
		shirtCount--;
		count--;
		price -= 25;
		cartPrice.textContent = "$" + price;
	}
	cartCount.textContent = count;
});
removePants.addEventListener('click', () => {
	if (pantsCount > 0) {
		pantsCount--;
		count--;
		price -= 40;
		cartPrice.textContent = "$" + price;
	}
	cartCount.textContent = count;
});
removeBelt.addEventListener('click', () => {
	if (beltCount > 0) {
		beltCount--;
		count--;
		price -= 15;
		cartPrice.textContent = "$" + price;
	}
	cartCount.textContent = count;
});
removeBoots.addEventListener('click', () => {
	if (bootsCount > 0) {
		bootsCount--;
		count--;
		price -= 60;
		cartPrice.textContent = "$" + price;
	}
	cartCount.textContent = count;
});

checkoutButton.addEventListener('click', () => {
	alert("Thank you for your purchase of " + count + " items totaling $" + price + "!");
	shirtCount = 0;
	pantsCount = 0;
	beltCount = 0;
	bootsCount = 0;
	price = 0;
	count = 0;
	cartCount.textContent = count;
	cartPrice.textContent = "$" + price;
});
