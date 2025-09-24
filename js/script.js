// let arr=[{
//     id:"1",
//     img: "images/goldwatch.avif",
//     name: "Golden Watch",
//     category:"Women",
//     price: 600,
// },
// {
//     id:"2",
//     img: "images/women-perfumes.webp",
//     name: "Rose perfume",
//     category:"Women",
//     price: 350,
// },
// {
//     id:"3",
//      img: "images/Small-Blue-Butterfly-Necklace-3.webp",
//     name: "Butterfly Necklace",
//     category:"Women",
//     price: 180,
// },
// {
//     id:"4",
//     img: "images/silver.webp",
//     name: "Silver bracelet",
//     category:"Women",
//     price: 200,
// },
// {
//     id:"5",
//     img: "images/Zircon-Stone-Interlocking-Bangle-1.webp",
//     name: "Zircon Bangle",
//     category:"Women",
//     price: 170,
// },
// {
//     id:"6",
//     img: "images/womenearring.jpg",
//     name: "Women earring",
//     category:"Women",
//     price: 210,
// },
// {
//     id:"7",
//     img: "images/watch men.avif",
//     name: "Leather watch",
//     category:"Men",
//     price: 305,
// },
// {
//     id:"8",
//     img: "images/pocket men.jpg",
//     name: "Leather pocket",
//     category:"Men",
//     price: 270,
// },
// {
//     id:"9",
//     img: "images/tester-perfumes-for-men.jpg",
//     name: "Woody Perfume",
//     category:"Men",
//     price: 240,
// },


// ]
// let rowprod = document.querySelector(".row-prod");

// function drawItems(items) {
//     let y = items.map((item) => {
//         return `
//             <div class="col-4 col-4-prod">
//                 <img src="${item.img}" alt="${item.name}">
//                 <h4>${item.name}</h4>
//                 <p>Price: <span>$${item.price}</span></p>
//                 <p>Category: <span>${item.category}</span></p>
//                 <div class="fav">
//                     <i class="fas fa-heart"  id="icon-${item.id}" onclick="icondisplay(${item.id})" style="color: black;"></i>
//                     <div class="btnfav">
//                     <input type="button" class="btncart" id="btncart-${item.id}" value="Add to cart" onclick="display(${item.id})" style="display: block;">
//                     <input type="button" class="btncart2" id="btncart2-${item.id}" value="Remove from cart" onclick="display(${item.id})" style="display: none; background-color: red;">
//                     </div>

//                 </div>
//             </div>`;
//     })
//      rowprod.innerHTML = y    
// }

// drawItems(arr);

// let typsearch = document.querySelector("#typ-search");
// let searchSelect = document.querySelector("#search_me");

// function search() {
//     let searchterm = typsearch.value.toLowerCase().trim();    
//     if(searchSelect.value === "Search by product name"){
//         let x = arr.filter((item) => {
//             return item.name.toLowerCase().includes(searchterm); 
//         });
//         drawItems(x);
//     }
//     else if(searchSelect.value === "Search by category"){
//         let z = arr.filter(item => {
//             return item.category.toLowerCase().startsWith(searchterm);
//         });
//         drawItems(z);
//     }
//     else{
//         drawItems(arr);
//     }
// }

// typsearch.addEventListener("input", search);

// let btn1log=document.getElementById("btn1log")
// let btn2rg=document.getElementById("btn2rg")
// let userinfo=document.querySelector("#userinfo")
// let user=document.getElementById("user")


// if(localStorage.getItem("firstname")){
//     btn1log.remove();
//     btn2rg.remove();
//     userinfo.style.display="flex";
//     user.innerHTML=`<p>Hello&nbsp${localStorage.getItem("firstname")}</p>`

// }


// let badge=document.getElementById("badge")
// let cartsproduct=document.querySelector("#cartsproduct div")
// let iconcart=document.getElementById("iconcart")
// let cartsproductmain=document.getElementById("cartsproduct")
// // function check(id) {
// //     if(!localStorage.getItem("firstname") ||!localStorage.getItem("lastname")|| !localStorage.getItem("email") || !localStorage.getItem("password")){
// //         window.location="login.html"
// //     }
// //     else{
// //         addtocart(id)
// //         display(id)
// //     }
// // }
// let cartlength;
// let arraytobedisplayed=[];
// let array2tobedisplayed=[];
// function addtocart(id){
//     let choosenItem=arr.find((item)=>{
//                 return item.id == id
//             }
//         )
//         cartsproduct.innerHTML +=`
//         <div style="position: relative; width: 220px; height: 150px; margin: 2px; padding: 15px; background-color: rgb(242, 235, 235); border-radius: 10px; margin-bottom: 20px;">
//                     <img src="" alt="" style="display: none;">
//                     <p id="name" style="font-size: 18px; font-weight: bold; width: 30px;">${choosenItem.name}</p>
//                     <p style="display: none;"></p>
//                     <button id="subtract-${choosenItem.id}" onclick="sub(${choosenItem.id})">-</button>&nbsp;<span id="counter-${choosenItem.id}">1</span>&nbsp;<button class="btnaddition" id="addition-${choosenItem.id}" onclick="add(${choosenItem.id})">+</button>
//                     <p class="price" id="price-${choosenItem.id}">Price : ${choosenItem.price}</p>

//                 </div>
//         `
//         iconcart.onclick= ()=>{
//             cartsproductmain.style.display="block"
//             }
//         cartlength= document.querySelectorAll("#cartsproduct div div")
//         badge.innerHTML=cartlength.length;
//         JSON.stringify(localStorage.setItem("thelength",cartlength.length))
//         array2tobedisplayed=[...array2tobedisplayed, choosenItem]
//         localStorage.setItem("choosenItem",JSON.stringify(array2tobedisplayed))


        
// }

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function removefromcart(id) {
// //     // Retrieve the cart items from localStorage
// //     let cartItems = JSON.parse(localStorage.getItem("choosenItem")) || [];
    
// //     // Find the index of the item to remove
// //     let index = cartItems.findIndex(item => item.id == id);
    
// //     if (index !== -1) {
// //         // Remove the item from the array
// //         cartItems.splice(index, 1);
        
// //         // Update localStorage with the new cart items
// //         localStorage.setItem("choosenItem", JSON.stringify(cartItems));
        
// //         cartsproduct.innerHTML=cartItems
// //         badge.innerHTML=cartItems.length;
// //     }
// // }
// function removefromcart(id) {
//     // Retrieve the cart items from localStorage
//     let cartItems = JSON.parse(localStorage.getItem("choosenItem")) || [];
    
//     // Find the index of the item to remove
//     let index = cartItems.findIndex(item => item.id == id);
    
//     if (index !== -1) {
//         // Remove the item from the array
//         cartItems.splice(index, 1);
        
//         // Update localStorage with the new cart items
//         localStorage.setItem("choosenItem", JSON.stringify(cartItems));
        
//         // Re-render the cart
//         renderCart(cartItems);
//     }
// }

// // Helper function to render the cart
// function renderCart(cartItems) {
//     // Clear the current cart content
//     cartsproduct.innerHTML = '';
    
//     // Re-render each item in the cart
//     cartItems.map(item => {
//         cartsproduct.innerHTML += `
//             <div style="position: relative; width: 220px; height: 150px; margin: 2px; padding: 15px; background-color: rgb(242, 235, 235); border-radius: 10px; margin-bottom: 20px;">
//                 <img src="" alt="" style="display: none;">
//                 <p id="name" style="font-size: 18px; font-weight: bold; width: 30px;">${item.name}</p>
//                 <p style="display: none;"></p>
//                 <button id="subtract-${item.id}" onclick="sub(${item.id})">-</button>&nbsp;<span id="counter-${item.id}">1</span>&nbsp;<button class="addition" id="addition-${item.id}" onclick="add(${item.id})">+</button>
//                 <p class="price" id="price-${item.id}">Price: ${item.price}</p>
//             </div>
//         `;
//     });
    
//     // Update the badge count
//     badge.innerHTML = cartItems.length;
    
//     // Optionally handle empty cart
//     // if (cartItems.length === 0) {
//     //     cartsproduct.innerHTML = '<p>Your cart is empty</p>';
//     // }
// }
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let cartadd=JSON.parse(localStorage.getItem("thelength"))
// function add(id) {
//     let counterElement = document.getElementById(`counter-${id}`);
//     let counter = parseInt(counterElement.textContent); // Corrected parsing
//     counterElement.innerHTML = counter + 1; // Increment counter
//     let cartadd=JSON.parse(localStorage.getItem("thelength"))
//     badge.innerHTML=cartadd+counter   //update badge 
//     let choosenItem = arr.find((item) => item.id == id);
//     let priceElement = document.getElementById(`price-${id}`);
//     priceElement.textContent = `Price: $${choosenItem.price * (counter + 1)}`; // Update price
// }

// function sub(id) {
//     let counterElement = document.getElementById(`counter-${id}`);
//     let counter = parseInt(counterElement.textContent); // Corrected parsing
//     counterElement.innerHTML = counter - 1; // Increment counter
//     let choosenItem = arr.find((item) => item.id == id);
//     let priceElement = document.getElementById(`price-${id}`);
//     priceElement.innerHTML = `Price: $${choosenItem.price * (counter - 1)}`; // Update price
// }

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function display(id) {
//     let btncart = document.getElementById(`btncart-${id}`);
//     let btncart2 = document.getElementById(`btncart2-${id}`); 
//     if(!localStorage.getItem("firstname") ||!localStorage.getItem("lastname")|| !localStorage.getItem("email") || !localStorage.getItem("password")){
//         window.location="login.html"
//     }
//    else{
//     if (btncart.style.display == "block") {
//         btncart.style.display = "none";
//         btncart2.style.display = "block";
//         addtocart(id)

//     }
//     else if(btncart2.style.display == "block"){
//         btncart.style.display = "block";
//         btncart2.style.display = "none";
//         removefromcart(id)

//     }
//       }
    
// }

// function icondisplay(id){
//     let choosenItem=arr.find(
//         (item)=>{
//             return item.id==id
//         }
//     )
//     arraytobedisplayed=[...arraytobedisplayed,choosenItem]

//     if(!localStorage.getItem("firstname") ||!localStorage.getItem("lastname")|| !localStorage.getItem("email") || !localStorage.getItem("password")){
//         window.location="login.html"
//     }
//     else{
//     let icon=document.getElementById(`icon-${id}`)
//     if(icon.style.color=="black"){
//          icon.style.color="red";
//          localStorage.setItem("favcarts",JSON.stringify(arraytobedisplayed))
//     }
//     else if(icon.style.color=="red"){
//         icon.style.color="black"
//         localStorage.removeItem(`${favcarts.id}`)
        
//     }
   
    
       

// }
   
    
// }



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let arr = [{
    id: "1",
    img: "images/goldwatch.avif",
    name: "Golden Watch",
    category: "Women",
    price: 600,
},
{
    id: "2",
    img: "images/women-perfumes.webp",
    name: "Rose perfume",
    category: "Women",
    price: 350,
},
{
    id: "3",
    img: "images/Small-Blue-Butterfly-Necklace-3.webp",
    name: "Butterfly Necklace",
    category: "Women",
    price: 180,
},
{
    id: "4",
    img: "images/silver.webp",
    name: "Silver bracelet",
    category: "Women",
    price: 200,
},
{
    id: "5",
    img: "images/Zircon-Stone-Interlocking-Bangle-1.webp",
    name: "Zircon Bangle",
    category: "Women",
    price: 170,
},
{
    id: "6",
    img: "images/womenearring.jpg",
    name: "Women earring",
    category: "Women",
    price: 210,
},
{
    id: "7",
    img: "images/watch men.avif",
    name: "Leather watch",
    category: "Men",
    price: 305,
},
{
    id: "8",
    img: "images/pocket men.jpg",
    name: "Leather pocket",
    category: "Men",
    price: 270,
},
{
    id: "9",
    img: "images/tester-perfumes-for-men.jpg",
    name: "Woody Perfume",
    category: "Men",
    price: 240,
}];

let rowprod = document.querySelector(".row-prod");

function drawItems(items) {
    let y = items.map((item) => {
        return `
            <div class="col-4 col-4-prod">
                <img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>Price: <span>$${item.price}</span></p>
                <p>Category: <span>${item.category}</span></p>
                <div class="fav">
                    <i class="fas fa-heart" id="icon-${item.id}" onclick="icondisplay(${item.id})" style="color: black;"></i>
                    <div class="btnfav">
                        <input type="button" class="btncart" id="btncart-${item.id}" value="Add to cart" onclick="display(${item.id})" style="display: block;">
                        <input type="button" class="btncart2" id="btncart2-${item.id}" value="Remove from cart" onclick="display(${item.id})" style="display: none; background-color: red;">
                    </div>
                </div>
            </div>`;
    });
    rowprod.innerHTML = y.join('');
}

drawItems(arr);

let typsearch = document.querySelector("#typ-search");
let searchSelect = document.querySelector("#search_me");

function search() {
    let searchterm = typsearch.value.toLowerCase().trim();
    if (searchSelect.value === "Search by product name") {
        let x = arr.filter((item) => {
            return item.name.toLowerCase().includes(searchterm);
        });
        drawItems(x);
    } else if (searchSelect.value === "Search by category") {
        let z = arr.filter(item => {
            return item.category.toLowerCase().startsWith(searchterm);
        });
        drawItems(z);
    } else {
        drawItems(arr);
    }
}

typsearch.addEventListener("input", search);

let btn1log = document.getElementById("btn1log");
let btn2rg = document.getElementById("btn2rg");
let userinfo = document.querySelector("#userinfo");
let user = document.getElementById("user");

if (localStorage.getItem("firstname")) {
    btn1log.remove();
    btn2rg.remove();
    userinfo.style.display = "flex";
    user.innerHTML = `<p>Hello&nbsp${localStorage.getItem("firstname")}</p>`;
}

let badge = document.getElementById("badge");
let cartsproduct = document.querySelector("#cartsproduct div");
let iconcart = document.getElementById("iconcart");
let cartsproductmain = document.getElementById("cartsproduct");

let arraytobedisplayed = [];
let cartItems = localStorage.getItem("choosenItem")? JSON.parse(localStorage.getItem("choosenItem")) : [];  //////////

function addtocart(id) {
    let choosenItem = arr.find((item) => item.id == id);
    let existingItem = cartItems.find((item) => item.id == id);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        existingItem.totalPrice = choosenItem.price * existingItem.quantity;
    } else {
        choosenItem.quantity = 1;
        choosenItem.totalPrice = choosenItem.price;
        cartItems.push(choosenItem);
    }

    localStorage.setItem("choosenItem", JSON.stringify(cartItems));
    renderCart(cartItems);
}

function removefromcart(id) {
    let index = cartItems.findIndex(item => item.id == id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        localStorage.setItem("choosenItem", JSON.stringify(cartItems));
        renderCart(cartItems);
    }
}

function renderCart(cartItems) {
    cartsproduct.innerHTML = '';
    cartItems.map(item => {
        cartsproduct.innerHTML += `
            <div style="position: relative; width: 220px; height: 150px; margin: 2px; padding: 15px; background-color: rgb(242, 235, 235); border-radius: 10px; margin-bottom: 20px;">
                <img src="" alt="" style="display: none;">
                <p id="name" style="font-size: 18px; font-weight: bold; width: 30px;">${item.name}</p>
                <p style="display: none;"></p>
                <button id="subtract-${item.id}" onclick="sub(${item.id})">-</button>&nbsp;<span id="counter-${item.id}">${item.quantity}</span>&nbsp;<button class="btnaddition" id="addition-${item.id}" onclick="add(${item.id})">+</button>
                <p class="price" id="price-${item.id}">Price: $${item.totalPrice || item.price}</p>
            </div>
        `;
    });

    let totalItems = cartItems.reduce((sum, item) => sum + (item.quantity), 0);
    if(totalItems<1){
        cartsproductmain.style.display="none";
        badge.style.display="none";
        localStorage.setItem("thelength", totalItems);

    }
    else{
    badge.innerHTML = totalItems;
    localStorage.setItem("thelength", totalItems);
    }
   
}

function add(id) {
    let choosenItem = arr.find((item) => item.id == id);
    let cartItem = cartItems.find((item) => item.id == id);
    if (cartItem) {
        cartItem.quantity = (cartItem.quantity || 1 ) + 1;
        cartItem.totalPrice = choosenItem.price * cartItem.quantity;
        localStorage.setItem("choosenItem", JSON.stringify(cartItems));
        renderCart(cartItems);
    }
}

function sub(id) {
    let cartItem = cartItems.find((item) => item.id == id);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartItem.totalPrice = cartItem.quantity * arr.find((item) => item.id == id).price;
        localStorage.setItem("choosenItem", JSON.stringify(cartItems));
        renderCart(cartItems);
    } else if (cartItem && cartItem.quantity === 1) {
        removefromcart(id);
    }
}

function display(id) {
    let btncart = document.getElementById(`btncart-${id}`);
    let btncart2 = document.getElementById(`btncart2-${id}`);
    badge.style.display="inline";
    if (!localStorage.getItem("firstname") || !localStorage.getItem("lastname") || !localStorage.getItem("email") || !localStorage.getItem("password")) {
        window.location = "login.html";
    } else {
        if (btncart.style.display === "block") {
            btncart.style.display = "none";
            btncart2.style.display = "block";
            addtocart(id);
        } else if (btncart2.style.display === "block") {
            btncart.style.display = "block";
            btncart2.style.display = "none";
            removefromcart(id);
        }
    }
}

function icondisplay(id) {
    let choosenItem = arr.find((item) => item.id == id);
    let icon = document.getElementById(`icon-${id}`);
    if (!localStorage.getItem("firstname") || !localStorage.getItem("lastname") || !localStorage.getItem("email") || !localStorage.getItem("password")) {
        window.location = "login.html";
    } else {
        if (icon.style.color === "black") {
            icon.style.color = "red";
            arraytobedisplayed = [...arraytobedisplayed, choosenItem];
            localStorage.setItem("favcarts", JSON.stringify(arraytobedisplayed));
        } else if (icon.style.color === "red") {
            icon.style.color = "black";
            arraytobedisplayed = arraytobedisplayed.filter(item => item.id !== id);
            localStorage.setItem("favcarts", JSON.stringify(arraytobedisplayed));
        }
    }
}

iconcart.onclick = () => {
    cartsproductmain.style.display = "block";
};

// Initialize cart on page load
renderCart(cartItems);