import { cart } from "./cart.js";
import { foods } from "./data/foods.js";
import { updateCartPrice } from "./cart.js";


function renderCartPage(){  

let cartList = '';
let orderSummary='';
const subTotal = updateCartPrice();
const deliveryFee = subTotal === 0 ? 0 : 4.99;
const tax = subTotal * 0.15;
const total = subTotal + deliveryFee + tax;




cart.forEach((food)=>{
    const foodId = food.id;
    let machingFood;
    foods.forEach((foodinfo)=>{
        if ( foodinfo.id === foodId){
            machingFood = foodinfo;
        }
    });
   


    cartList +=
    `
        <div class="food-card ">
                <div class="food-image">
                <img src=${machingFood.image}  alt="${machingFood.name}">                     
                </div>
                <div class="food-info">
                <h3 class="food-name">${machingFood.name}</h3>
                <p class="food-description">${machingFood.description}</p>
                <div class="food-price-add">
                    <span class="food-price">$${(machingFood.priceCent / 100).toFixed(2)}</span>
                    <span class="quantity">× ${food.quantity}</span>
                </div>
                </div>
            </div>
        </div>
    `
    ;
});
orderSummary = 
        `
         <div>
                <h3>Order Summary</h3>
                
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span id="subtotal">$${subTotal.toFixed(2)}</span>
                </div>
                
                <div class="summary-row">
                    <span>Delivery Fee</span>
                    <span id="delivery-fee">$${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div class="summary-row">
                    <span>Tax (15%)</span>
                    <span id="tax">$${tax.toFixed(2)}</span>
                </div>
                
                <hr class="summary-divider">
                
                <div class="summary-row total-row">
                    <span>Total</span>
                    <span id="total">$${total.toFixed(2)}</span>
                </div>
                <a href="check-out.html">
                <button class="btn btn-primary calculate-btn" id="calculate-btn">
                    Calculate & Proceed to Checkout
                </button>
                </a>
                
              </div>
        `

document.querySelector('.js-cart-items').innerHTML = cartList;
document.querySelector('.js-order-summary').innerHTML = orderSummary;
}
renderCartPage();
