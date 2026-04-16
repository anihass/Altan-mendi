const cart =[{
    id:1,
    image:"images/menu-page-images/chiken-mendi/chiken-mendi-with-rice.jpg",
    name:"Chicken Mendi",
    description:"Fragrant basmati rice with tender chicken, slow-cooked with spices.",
    priceCent:890,
    quantity:1, 
}];

function generateCart(){
    let cartList = '';
    let emtyCart = '';
    if (cart !== null){
        cart.forEach((food)=>{
        cartList += `
         <div class="food-card">
                    <div class="food-image">
                        <img src=${food.image}  alt="${food.name}">                        
                    </div>
                    <div class="food-info">
                        <h3 class="food-name" id="chiken">${food.name}</h3>                        
                        <p class="food-description">Fragrant basmati rice with tender chicken, slow-cooked with spices.</p>                        
                        <div class="food-price-add">
                            <span class="food-price">$${(food.priceCent / 100).toFixed(2)}</span>
                            <button class="add-quantity-btn">+1</button>                            
                            <button class="delete-from-cart-btn">
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
        `;
        console.log(cartList);
        document.querySelector('.js-cart-items').innerHTML = cartList;
    });  

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