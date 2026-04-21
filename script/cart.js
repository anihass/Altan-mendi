import { foods } from "./data/foods.js";

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart =  cart =[{
    id:'1',
    quantity:1
},{
    id:'2',
    quantity:1
}]
};
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(foodId){
    let machingFood = null;
    cart.forEach((food)=>{
        if (foodId === food.id){
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
    saveToStorage();
   
};  

export function deleteFromCart(foodId){
    let newcart = [];
    cart.forEach((food)=>{
        if (food.id !== foodId){
            newcart.push(food);
        }
    });
    cart = newcart;
    saveToStorage();
    
}

export function updateCartPrice(foodId){
    let totalPrice = 0;
    let machingFood = null;
   cart.forEach((food)=>{
        const foodId = food.id;
        foods.forEach((foodinfo)=>{
            if ( foodinfo.id === foodId){
                machingFood = foodinfo;
                totalPrice += (machingFood.priceCent * food.quantity) / 100;
            }
        });  
    });
    return totalPrice;    
};

export function addQuantity(foodId) {
    let newQuantity ;
    cart.forEach((food) => {
        if (food.id === foodId) {
            food.quantity += 1; 
            console.log(food.quantity)  // increment the cart item quantity
        }
    });
    saveToStorage();
    
};
 let cartNumber = 0;
export function updateCartIcon(){
    cartNumber += 1;
    saveToStorage();
    console.log(cartNumber);
    return cartNumber;
}
