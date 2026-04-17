export let cart;
import { foods } from "./data/foods.js";
 cart =[{
    id:1,
    image:"images/menu-page-images/chiken-mendi/chiken-mendi-with-rice.jpg",
    name:"Chicken Mendi",
    description:"Fragrant basmati rice with tender chicken, slow-cooked with spices.",
    priceCent:890,
    quantity:1, 
}]; 

export function saveTolocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(foodId){
    let machingFood;
    cart.forEach((food)=>{
        if (food.id === foodId){
            machingFood = food;
        };
    });
    if(machingFood){
        machingFood.quantity += 1;  
    }else{
        cart.push({
            id: foodId,
            quantity: 1,
        });
    }
    console.log(cart);  
};

function generateCart(){
    let cartList = '';
    cart.forEach((CartFood)=>{
        const cartId = CartFood.id;
        const machingFood = getFoods(cartId);
        console.log(machingFood);
    });
}
generateCart(); 
 function getFoods(foodId){
    let machingFood;
    foods.forEach((food)=>{
        if (foodId === food.id){
            machingFood = food;
        }
    });
    return machingFood;
}
console.log(cart);
/*
export function generateCart(){
    let cartList = '';
    let emtyCart = '';
    if (cart.length > 0){
        cart.forEach((food)=>{
                const foodId = food.id;
                const machingFood = getFoods(foodId);
                cartList += `
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
                                    <button class="delete-from-cart-btn">
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                `;
            });  
document.querySelector('.js-cart-items').innerHTML = cartList;

    }else{
        emtyCart += `
        <div id="empty-cart" class="empty-cart">
          <p>Your cart is empty 🍛</p>
          <a href="menu.html" class="btn btn-primary">Browse Menu</a>
        </div>
        `;
        document.querySelector('.js-cart-items').innerHTML = emtyCart;
    }
    };
    generateCart(); 
    */
    /*
generateCart();
export function addToCart(foodId){
    let machingFood;
    cart.forEach((food)=>{
        if (food.id === foodId){
            machingFood = food;
        }
        if (machingFood){
            machingFood.quantity += 1;
        }
        else{
            cart.push({
                id: foodId,
                quantity: 1,
            });
        }
        console.log(cart);

    })

}
    */
    