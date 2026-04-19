import { cart } from "./cart.js";
import { foods } from "./data/foods.js";
import { updateCartPrice } from "./cart.js";


function renderCartPage(){  

let cartList = '';


cart.forEach((food)=>{
    const foodId = food.id;
    let machingFood;
    foods.forEach((foodinfo)=>{
        if ( foodinfo.id === foodId){
            machingFood = foodinfo;
            console.log(machingFood);
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
document.querySelector('.js-cart-items').innerHTML = cartList;
}
renderCartPage();
