import { cart,updateCartPrice } from "./cart.js";
import { foods } from "./data/foods.js";


let cartList = '';
let checkOutSummary='';
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

checkOutSummary +=`<div class="confirmation-box">
          
          <!-- Green Checkmark Circle -->
          <div class="success-icon">
            <div class="check-circle">
              <span class="checkmark">✓</span>
            </div>
          </div>

          <h2 class="success-title">Order Placed Successfully!</h2>
          <p class="success-message">
            Thank you for ordering from Altan Mandi.<br>
            Your food is being prepared.
          </p>

          <!-- Order Summary in confirmation box -->
          <div class="mini-summary">
            <div class="summary-row">
              <span>Total Amount</span>
              <span class="total-amount">$${total.toFixed(2)}</span>
            </div>
          </div>  
        </div>`
        ;
document.querySelector('.js-order-items').innerHTML = cartList;
document.querySelector('.js-confirmation-box').innerHTML = checkOutSummary



