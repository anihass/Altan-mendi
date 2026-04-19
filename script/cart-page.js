import { addToCart,cart,deleteFromCart } from "./cart.js";
import { foods } from "./data/foods.js";




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
        <div class="food-card">
            <div class="food-image">
                <img src=${machingFood.image}  alt="${machingFood.name}">                        
            </div>
            <div class="food-info">
                <h3 class="food-name">${machingFood.name}</h3>                        
                <p class="food-description">${machingFood.description}</p>                        
                <div class="food-price-add">
                    <span class="food-price">$${(machingFood.priceCent / 100).toFixed(2)}</span>
                    <button class="add-quantity-btn">+1</button>                            
                    <button class="delete-from-cart-btn js-delete-from-cart-btn" data-food-id="${foodId}">
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    `
    ;
});
document.querySelector('.js-cart-items').innerHTML = cartList;
document.querySelectorAll('.js-delete-from-cart-btn').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const foodId = button.dataset.foodId;
        console.log(foodId);
        deleteFromCart(foodId);    
        renderCartPage();
       
        });
    });

}
renderCartPage();