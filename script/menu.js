import { addToCart } from "./cart.js";
import { foods } from "./data/foods.js";   
let foodList = '';


    foods.forEach((food)=>{
    foodList += `
    <div class="food-card">
            <div class="food-image">
                <img src=${food.image} alt="${food.name}">
            </div>
            <div class="food-info">
                <h3 class="food-name" id="chiken">${food.name}</h3>
                <p class="food-description">${food.description}</p>
                <div class="food-price-add">
                    <span class="food-price">$${((food.priceCent)/100).toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-food-id="${food.id}">
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>  `;
    } 
);
document.querySelector('.js-food-card').innerHTML = foodList;
document.querySelectorAll('.add-to-cart-btn').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const foodId = button.dataset.foodId;
        console.log(foodId);
        addToCart(foodId);  
        
    });
});




    



