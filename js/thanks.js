let order = JSON.parse(localStorage.getItem("order"));
let elt = document.getElementById("thanks");
let p = document.createElement("p");


elt.appendChild(p).innerHTML = " Orino  vous remercie pour vous commande n°" + order["orderId"] + ". Le Montant de votre commande s'élève à " + sessionStorage.getItem("totalPrice") + " euros. Vous recerverez par mail la confirmation de votre commmande."
localStorage.clear()
sessionStorage.clear()