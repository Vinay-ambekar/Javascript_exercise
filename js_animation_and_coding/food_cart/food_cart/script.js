let products = [
    { id: 1, image: "./images/97.jpg", title: "Plain", price: 40 },
    { id: 2, image: "./images/98.jpg", title: "Paper Roast", price: 65 },
    { id: 3, image: "./images/99.jpg", title: "Onion Roast", price: 80 },
    { id: 4, image: "./images/100.jpg", title: "Egg Parotta", price: 55 },
    { id: 5, image: "./images/101.jpg", title: "Plain Omelette", price: 25 },
    { id: 6, image: "./images/102.jpg", title: "Chicken Fry", price: 150 },
    { id: 7, image: "./images/103.jpg", title: "Egg Veechu", price: 65 },
    { id: 8, image: "./images/104.jpg", title: "Egg Roast", price: 65 },
  ];
  const categories = [...new Set(products.map((item) => item.title))]; // Extract unique titles
  let i = 0;
  let sidebarExpanded = false;
  // Toggle the sidebarExpanded variable  
  document.querySelector(".rowsCols").innerHTML = categories
    .map((title, index) => {
      const product = products.find((item) => item.title === title);
      const { image, price } = product;
       let div = ""
      
        if ((index ) % 4 === 0) {
          div += '<div class="row food_items">';
        }
      div +=`
        <div class="col mb-3 p-2 row_append">
              <div class="card ">
                  <div class="card-img">
                      <img src="${image}" class="img p-2" alt="...">
                  </div>
                  <div class="card-body">
                      <h5 class="card-title text-danger">${title}</h5>
                      <p class="card-text">Rs.${price}</p>
                  </div>` +
        "<a href='#'  onclick='addtocart(" +
        i++ +
        ")' class='btn btn-success position-absolute bottom-0 end-0'><i class='fa fa-shopping-cart'></i></a>" +
        `</div>
          </div>          
          `;
        
      return div;
    }).join('')
  // Right sidebar toggle
  let rightSideBar = document.querySelector("section .right-side-bar");
 // let sidebarExpanded = false;
 let divrow=document.querySelector('.row_append')
  function sidebar() {
    if (!sidebarExpanded) {
      rightSideBar.classList.remove("expanded1");
      rightSideBar.classList.add("expanded");
      document.querySelector('.food_items').style.width='700px'
      sidebarExpanded = true;
      
    } else {
      rightSideBar.classList.add("expanded1");
      rightSideBar.classList.remove("expanded");
      document.querySelector('.food_items').style.width='auto'
      sidebarExpanded = false;
    }
  }
  // Add to cart function
  let cart = [];
  function addtocart(index) {
    const selectedItem = products[index];
    const itemIndex = cart.findIndex((item) => item.id === selectedItem.id);
    if (itemIndex === -1) {
      cart.push({ ...selectedItem, quantity: 1 });
    } else {
      //here on click button increments the quntity of itmes
     // cart[itemIndex].quantity++;
    }
    displayCart();
  }
  // Delete item from cart
  function delElement(index) {
    if (confirm("Are you sure you want to continue?")) {
      //console.log("User clicked OK.");
      cart.splice(index, 1);
       displayCart();
  } 
  }
  // Update quantity in cart
  function handleClick(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    displayCart();
  }
  // Display cart items
  function displayCart() {
    let total = 0;
    let sidecart = document.querySelector(".div-cart span");
    let count = document.querySelector("#add_click_count");
    count.textContent = cart.length;
    if (cart.length === 0) {
      sidecart.innerHTML = "Your cart is empty";
      count.style.display = "none";
    } else {
      count.style.display = "inline";
      sidecart.innerHTML = cart
        .map((item, index) => {
          total += item.price * item.quantity;
          return `
            <div class="cart-page d-flex flex-row align-items-center justify-content-evenly">
            <div class="text-center">
            <img src="${item.image}" alt="#">
              <p class="fs-6 fw-bold text-danger">${item.title}</p>          
            </div>
              <input type="number" class="form-control" pattern="\d+" min="1" max="9" name="quantity" onchange="handleClick(${index},this.value)" value="${item.quantity}">
              <p class="fw-bold text-dark">Price:${item.price * item.quantity}</p>
              <i class="fas fa-trash-alt" onclick="delElement(${index})"></i>
            </div>`;
        }).join('')
    }
    document.querySelector(".totalprice p:nth-child(2)").innerHTML = `Rs.${total}`;
  }
  