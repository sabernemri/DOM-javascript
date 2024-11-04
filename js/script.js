document.addEventListener("DOMContentLoaded",()=>{


const produits=document.querySelectorAll(".card");
const totalPrix=document.querySelector(".total");
let totalPrice=0;
produits.forEach(produit=>{

    const unitPrice=parseFloat(produit.querySelector(".unit-price").textContent)
    const quantityEl=produit.querySelector(".quantity");

    const BoutonPlus=produit.querySelector(".fa-plus-circle");
    const BoutonMoin=produit.querySelector(".fa-minus-circle");

    

    const likeBouton = document.getElementById("likeButton");
const heartIcone = likeBouton.querySelector(".fa-heart");
    const suppBouton=produit.querySelector(".fa-trash-alt");



BoutonPlus.addEventListener("click",()=>{
let quantity=parseInt(quantityEl.textContent);
quantityEl.textContent=++quantity;
totalPrice+=unitPrice;
totalPrix.textContent=totalPrice;
})

BoutonMoin.addEventListener("click",()=>
    {
    let quantity=parseInt(quantityEl.textContent);
    if(quantity>0){
    quantityEl.textContent=--quantity;
    totalPrice-=unitPrice;
    totalPrix.textContent=totalPrice;
}})

suppBouton.addEventListener("click",()=>{
    produit.remove();

})

//likeBouton.addEventListener("click",()=>{


//likeBouton.style.color="red"


likeBouton.addEventListener("click", () => {
    if (heartIcone.style.color === "red") {
        heartIcone.style.color = "black";
    } else {
        heartIcone.style.color = "red";
    }
})


})





});

