let p = 0;

function shop(target) {
  const itemTitle = target.querySelector("h2").innerText;
  addToCart(itemTitle);
  const totalPriceString = target.querySelector("span").innerText;
  const totalPriceToFloat = parseFloat(totalPriceString);
  p += totalPriceToFloat;
  const totalPrice = p.toFixed(2);
  setNewText("total-price", totalPrice);
  enableCoupn();
  enablePurchase();
}

function setNewText(feildId, newText) {
  document.getElementById(feildId).innerText = newText;
}

function addToCart(item) {
  const cart = document.getElementById("cart-items");
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.classList.add("card-title");
  const count = cart.childElementCount;
  p.innerHTML = `${count + 1}. ${item}`;
  cart.appendChild(p);
}

function enableCoupn() {
  const button = document.getElementById("apply");
  if (p >= 200) {
    button.disabled = false;
  }
}

function enablePurchase() {
  const button = document.getElementById("purchase-btn");
  if (p > 0) {
    button.disabled = false;
  }
}

function verifyDiscount() {
  const promo = document.getElementById("promo-code");

  const promoValue = promo.value;
  if (promoValue === "SELL200") {
    return true;
  }
}

function getDiscount() {
  const verify = verifyDiscount();
  if (verify === true) {
    const discountEx = p * 0.2;
    const discount = discountEx.toFixed(2);

    setNewText("discount-text", discount);
    totalPay = p - discount;
    totalPayFixed = totalPay.toFixed(2);
    setNewText("total-pay", totalPayFixed);
  }
}
