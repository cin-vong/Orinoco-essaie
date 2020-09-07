// Widow.location  pour récupérer l'ID des oursons 
let idUrl = window.location.search;
let idTeddy = idUrl.substr(4);
let newArticle = []
sessionStorage.removeItem("color");
sessionStorage.removeItem("amount");
console.log(newArticle)
//définions des classes et des différents éléments pour construire la page produit dynamiquement


let newTeddy = document.getElementById("teddyProduct")
newTeddy.classList.add("card-body");
let teddyH3 = document.createElement("h3");
let labelColor = document.createElement("label");
let choiceColor = document.createElement("select");
teddyH3.classList.add("card-title");
let divImg = document.createElement("div");
divImg.classList.add("col-lg-6");
let divDescription = document.createElement("div");
divDescription.classList.add("col-lg-6");
let teddyPrice = document.createElement("h4");
let teddyDescription = document.createElement("p");
let divColor = document.createElement("div");
divColor.classList.add("col-lg-4");
let addTeddy = document.createElement("input");
let myImg = new Image();
myImg.addEventListener('load', function () { })
addTeddy.classList.add("btn", "btn-primary");
let addCart = document.createElement("a");

// fin des définions de classes et d'éléments


// promessse "resolve" pour récupérer les éléments dans le fichiers Json et les implémenter dans le code source.
function promiseGet() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/api/teddies/' + idTeddy);

        request.send();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    let response = JSON.parse(this.responseText);

                }
                // fin de la liste
                else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
};
// fin de la promessse resolve 
// ajout d'éléments dynamiques d'une peluche en fonction de son Id 
promiseGet()
    .then(function (response) {
        myImg.src = response["imageUrl"];
        newTeddy.appendChild(divImg).appendChild(myImg);
        newTeddy.appendChild(teddyH3).innerHTML = response["name"];
        newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response["price"] / 100 + " euros";
        newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response["description"];
        labelColor.innerHTML = "couleur du modèle : ";

    })
// choix de la couleur du modèle
promiseGet()
    .then(function (response) {
        for (d = -1; d < response["colors"].length; d++) {
            if (d < 0) {
                let x = newTeddy.appendChild(labelColor).appendChild(choiceColor)
                let option = document.createElement("option");
                option.text = "choisir";
                x.add(option);
            }
            else {
                let x = newTeddy.appendChild(labelColor).appendChild(choiceColor)
                let option = document.createElement("option");
                option.text = response["colors"][d];
                option.setAttribute("value", option.text);
                x.add(option);

                choiceColor.addEventListener("click", function (event) {
                    sessionStorage.removeItem("color")
                    if (x.value != "choisir") {
                       
                        let colorStorage = x.value;                        event.preventDefault();
                        sessionStorage.setItem("color", colorStorage);
                    }
                })


            }
        }

    })
// Choix de la quantité de peluches commandées
promiseGet()
    .then(function () {

        let labelAmountTeddy = document.createElement("label");
        labelAmountTeddy.classList.add("col-lg");
        labelAmountTeddy.innerHTML = "Quantité : ";
        let amount = document.createElement("select");
        var xAmount = newTeddy.appendChild(labelAmountTeddy).appendChild(amount);
        var optionAmount = document.createElement("option");

        for (d = 1; d <= 5; d++) {
            var optionAmount = document.createElement("option");
            optionAmount.text = d
            xAmount.add(optionAmount);
            sessionStorage.setItem("amount", "1")
            amount.addEventListener("click", function (event) {
                sessionStorage.removeItem("amount")
                let amountStorage = xAmount.value
                event.preventDefault();
                sessionStorage.setItem("amount", amountStorage);

            });

        }
    })

// fin des choix
// ajout d'un bouton pour ajouter la commande au panier.
promiseGet()
    .then(function (response) {
        addTeddy.type = "submit";
        newTeddy.appendChild(divColor).appendChild(addTeddy).innerHTML = "Ajouter au panier";
        // fonction session storage pour envoyer les articles dans le panier 
        addTeddy.addEventListener("click", function (event) {
            if (sessionStorage.getItem("color")) {
                event.preventDefault();
                let test = (JSON.stringify({
                    id: response["_id"],
                    name: response["name"],
                    price: response["price"] / 100,
                    amount: sessionStorage.getItem("amount"),
                    color: sessionStorage.getItem("color"),
                    imageUrl: response["imageUrl"]
                }));


                sessionStorage.setItem("newArticle", test);
                sessionStorage.removeItem("color");
                sessionStorage.removeItem("amount");
                window.location = "cart.html";
            }
            else {
                event.preventDefault();
                alert(" veuillez choisir une couleur")
            }

        })
    })

    // fin d'envoi des éléments au local storage 


    .catch(function (error) {
    });



function promiseListTeddy() {
    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/teddies/');
        recoverHttp.send();
        recoverHttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);

                }
                else {
                    reject(XMLHttpRequest);
                }
            }
        }
    });

}
promiseListTeddy()
    .then(function (response) {
        for (i = 0; i < response.length; i++) {
            let nameTeddy = document.createElement("p");
            let Lien = document.createElement("a")
            let idLien = response[i]["_id"];
            Lien.href = "product.html?id=" + idLien;
            nameTeddy.classList.add("bg-primary", "text-white", "listTeddy_product");
            let elt = document.getElementById("listTeddy");
            elt.appendChild(Lien).appendChild(nameTeddy).innerHTML = response[i]["name"];
            elt.addEventListener("click", function (event) {
                sessionStorage.removeItem("color");
                sessionStorage.removeItem("amount");
            })
        }
    })
    .catch(function (error) {

    });