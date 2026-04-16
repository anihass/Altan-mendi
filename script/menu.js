import { foods } from "./data/foods.js";   
let foodList = '';
export function generateMenu(){
    
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
                    <button class="add-to-cart-btn">
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>  `;
    } 
);
document.querySelector('.js-food-card').innerHTML = foodList;
document.querySelectorAll('.add-to-cart-btn').forEach((button)=>{

    button.addEventListener('click', (event)=>{
        console.log(foods.id);
        
    });

});



};
generateMenu();


