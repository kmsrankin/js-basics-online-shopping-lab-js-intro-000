var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {}
  item_object['itemPrice'] = price
  item_object['itemName'] = item // write your code here
  cart.push(item_object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } var array = []
    for (var i = 0; i < cart.length; i++) {
    array.push(cart[i].itemName + " at $" + cart[i].itemPrice)
  } if (cart.length === 1) {
      return ("In your cart, you have " + array + ".")
    } else if (cart.length >= 2) {
      return ("In your cart, you have " + array.slice(0, cart.length - 1).join(", ") + ", and " + array.pop() + ".")
  }
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
  sum += (cart[i].itemPrice);
  } return sum
}

function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
    var itemInCart = true;
    cart.splice(i, 1)
    }
  }
  return  cart;// write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
