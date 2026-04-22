import { cart,updateCartPrice,updateCartIcon } from "./cart.js";
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

checkOutSummary +=
`<div class="confirmation-box">
  
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
let headersummary ='';
headersummary+=`
 <div class="nav-container">
      
      <!-- Logo - Moved more to the left -->
      <div class="logo">
        <img src="images/main-page-images/Altan-mendi-logo.jpg" alt="Altan Mendi Logo" class="logo-img">
        <div class="logo-text">
          <span class="altan">Altan</span>
          <span class="mendi">Mendi</span>
        </div>
      </div>

      <!-- Search Bar - In the middle -->
      <div class="search-container">
        <input type="text" id="search-input" class="search-bar" placeholder="Search menu (e.g. Chicken Mendi, Beef...)">
        <button class="search-btn">
          🔍
        </button>
      </div>

      <!-- Menu Links -->
      <div class="nav-links">
        <a href="altan-main.html" class="nav-link">Home</a>
        <a href="menu.html" class="nav-link">Menu</a>
        <a href="order.html" class="nav-link highlight">Order Now</a>
        <a href="about-us.html" class="nav-link">About Us</a>
        <a href="check-out.html" class="nav-link active">Check out</a>
      </div>

      <!-- Right Side -->
      <div class="nav-right">
        <!-- Cart Icon with Number -->
        <a href="cart.html" class="cart-link" title="View Cart">
          <svg xmlns="http://www.w3.org/2000/svg" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span id="cart-count" class="cart-count js-cart-count">0</span>
        </a>

        <!-- Theme Toggle -->
        <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
          <span id="theme-icon">☀️</span>
        </button>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="mobile-menu-btn">☰</button>
      </div>
    </div>
`;
document.querySelector('.js-navbar').innerHTML = headersummary;
updateCartIcon();
document.querySelector('.js-order-items').innerHTML = cartList;
document.querySelector('.js-confirmation-box').innerHTML = checkOutSummary



