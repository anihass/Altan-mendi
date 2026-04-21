import { addQuantity, addToCart,cart,deleteFromCart,updateCartIcon } from "./cart.js";
import { foods } from "./data/foods.js";




function renderCartPage(){  

let cartList = '';
let orderSummary='';
let headerSummary='';
let iconNumber = updateCartIcon();


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
            <div class="food-card">
                <div class="food-image">
                    <img src=${machingFood.image}  alt="${machingFood.name}">                        
                </div>
                <div class="food-info">
                    <h3 class="food-name">${machingFood.name}</h3>                        
                    <p class="food-description">${machingFood.description}</p>                        
                    <div class="food-price-add">
                        <span class="food-price">$${(machingFood.priceCent / 100).toFixed(2)}</span>
                        <button class="add-quantity-btn js-add-quantity-btn" data-food-id="${foodId}">
                            +1
                        </button>
                        <button class="delete-from-cart-btn js-delete-from-cart-btn" data-food-id="${foodId}">
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        `
        ;
    });
    headerSummary += `
    <div class="nav-container">
        <!-- Logo -->
        <div class="logo">
            <img src="images/main-page-images/Altan-mendi-logo.jpg" alt="Altan Mendi Logo" class="logo-img">
            <div class="logo-text">
            <span class="altan">Altan</span>
            <span class="mendi">Mendi</span>
            </div>
        </div>

        <!-- Search Bar -->
        <div class="search-container">
            <input type="text" id="search-input" class="search-bar" placeholder="Search menu (e.g. Chicken Mendi, Beef...)">
            <button class="search-btn">🔍</button>
        </div>

        <!-- Menu Links -->
        <div class="nav-links">
            <a href="altan-main.html" class="nav-link">Home</a>
            <a href="menu.html" class="nav-link">Menu</a>
            <a href="order.html" class="nav-link highlight">Order Now</a>
            <a href="about-us.html" class="nav-link">About Us</a>
            <a href="check-out.html" class="nav-link">Check out</a>
        </div>

        <!-- Right Side -->
        <div class="nav-right">
            <a href="cart.html" class="cart-link" title="View Cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span id="cart-count" class="cart-count js-cart-count">0</span>
            </a>

            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
            <span id="theme-icon">☀️</span>
            </button>

            <button id="mobile-menu-btn" class="mobile-menu-btn">☰</button>
        </div>
        </div>
    `;

document.querySelector('.js-cart-items').innerHTML = cartList;
document.querySelectorAll('.js-delete-from-cart-btn').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const foodId = button.dataset.foodId;        
        deleteFromCart(foodId);    
        renderCartPage();
       
        });
    });
document.querySelectorAll('.js-add-quantity-btn').forEach((button)=>{
    button.addEventListener('click', ()=>{
        const foodId = button.dataset.foodId;       
        addQuantity(foodId);
        renderCartPage();    
    });
}); 
document.querySelector('.js-navbar').innerHTML = headerSummary;

};    
renderCartPage();