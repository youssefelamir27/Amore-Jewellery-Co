
let chosenItem = localStorage.getItem("choosenItem");
let cartrow = document.querySelector(".cartrow");
let btn1log = document.getElementById("btn1log");
let btn2rg = document.getElementById("btn2rg");
let userinfo = document.querySelector("#userinfo");
let user = document.getElementById("user");
let badge = document.getElementById("badge");
if (localStorage.getItem("thelength")) {
    btn1log.remove();
    btn2rg.remove();
    userinfo.style.display = "flex";
    badge.style.display="inline"
    user.innerHTML = `<p>Hello&nbsp${localStorage.getItem("firstname")}</p>`;
}
let cartitem= JSON.parse(chosenItem) ////////////////////

if(chosenItem){
    drawItems(cartitem)
}

function drawItems(cartitem) {
    let y = cartitem.map((item) => {
        return `
        <div class="col-5 col-cart mt-5 mb-5">
                    <img src="${item.img}" alt="">
                    <div>
                    <p id="name">${item.name}</p>
                    <p class="categorycart">Category:&nbsp${item.category}</p>
                    <p class="pricecart" id="price-${item.id}">Price : ${item.totalPrice}</p>
                    <button id="subtract-${item.id}" onclick="sub(${item.id})">-</button>&nbsp;<span id="counter-${item.id}">${item.quantity}</span>&nbsp;<button id="addition-${item.id}" onclick="add(${item.id})">+</button> 
                     <input type="button" class="btncart25" id="btncart2-${item.id}" value="Remove from cart" style="background-color: red; display:inline;" onClick="removeDirect(${item.id})">
                    </div>
                    
                    

        </div>

        `
    });
    cartrow.innerHTML = y;
    let showTotalPriceforElements=document.querySelector(".showTotal");
    let totalItemsPrice = cartitem.reduce((sum, item) => sum + (item.totalPrice), 0);
    showTotalPriceforElements.innerHTML=totalItemsPrice;
    let totalItems = cartitem.reduce((sum, item) => sum + (item.quantity), 0);
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

let favcarts=localStorage.getItem("favcarts")
let cartrow2 = document.querySelector(".cartrow-2");
let cartitemfav= JSON.parse(favcarts)
if(favcarts){
    drawfav(cartitemfav)
}

function drawfav(cartitemfav) {
    let y = cartitemfav.map((item) => {
        return `
        <div class="col-3 col-cart col-cart2 mt-5 mb-5">
                    <img src="${item.img}" alt="">
                    <p id="name">${item.name}</p>
                    <p class="categorycart">Category:&nbsp${item.category}</p>
                    <i class="fas fa-heart"  id="icon-${item.id}" onclick="icondisplay(${item.id})" style="color: black;"></i>                 
                    

        </div>
        `
    });
    cartrow2.innerHTML = y.join("-");
}
// /////////////////////////////////////////////////////////////////
function add(id){
    let cartadd = cartitem.find((item) => item.id == id);
    cartadd.quantity = cartadd.quantity + 1;
    cartadd.totalPrice = cartadd.quantity * cartadd.price;
    localStorage.setItem("choosenItem", JSON.stringify(cartitem)); // Use the correct key
    drawItems(cartitem);

}
function sub(id){
    let cartsub= cartitem.find((item)=> item.id==id )
    let subindex=cartitem.findIndex((item)=> item.id==id )
    cartsub.quantity =cartsub.quantity -1
    cartsub.totalPrice=cartsub.quantity * cartsub.price;
    if(cartsub.quantity < 1){
        cartitem.splice(subindex,1)
        localStorage.setItem("choosenItem", JSON.stringify(cartitem));
        drawItems(cartitem)

    }
    else{
        localStorage.setItem("choosenItem", JSON.stringify(cartitem));
        drawItems(cartitem)
    }
}

function removeDirect(id){
    let indexremove=cartitem.findIndex((item)=>item.id==id )
    cartitem.splice(indexremove,1)
    localStorage.setItem("choosenItem", JSON.stringify(cartitem));
    drawItems(cartitem)

}
function icondisplay(id){
    let favIndex= cartitemfav.findIndex((item)=> item.id==id )
    cartitemfav.splice(favIndex,1)
    localStorage.setItem("favcarts",JSON.stringify(cartitemfav))
    drawfav(cartitemfav)

}
// /////////////////////////////////////////////////////

let imglogo=document.getElementById("imglogo")
imglogo.addEventListener("click", (e)=>{
    e.preventDefault();
    setTimeout(
        ()=>{
            window.location="index.html"
        },1000)

})