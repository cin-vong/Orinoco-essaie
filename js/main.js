// récupérations de tous les éléments pour constituer une liste des différentes peluches dans l'index.html

// promesse pour récupérer les éléments dynamiquement
function promiseGet() {

    return new Promise((resolve, reject) => {
        let recoverHttp = new XMLHttpRequest();
        recoverHttp.open('GET', 'http://localhost:3000/api/teddies/');
        recoverHttp.send();
        recoverHttp.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);
                } else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
};

promiseGet()
    .then(function (response) {

        for (let i = 0; i < response.length; i++) {
            let elt = document.getElementById("teddy");
            let myImg = new Image();
            myImg.addEventListener('load', function () {
            });
            myImg.src = response[i]["imageUrl"];
            const divRow = document.createElement("div");
            divRow.classList.add("row", "listTeddy", "my-lg-4", "text-white", "bg-primary");
            const divImage = document.createElement("div");
            divImage.classList.add("col-lg-3", "bg-white")
            const newDiv = document.createElement("div");
            newDiv.classList.add("col-lg-6", "my-5", "offset-1");
            const nameTeddy = document.createElement("h2");
            const priceTeddy = document.createElement("p");
            const descriptionTeddy = document.createElement("p");
            const lienProduct = document.createElement("a");
            let idLien = response[i]["_id"]
            lienProduct.href = "product.html?id=" + idLien
            lienProduct.classList.add("stretched-link", "text-white");
            elt.appendChild(divRow).appendChild(divImage).appendChild(myImg);
            elt.appendChild(divRow).appendChild(newDiv).appendChild(lienProduct).appendChild(nameTeddy).innerHTML = response[i]["name"];
            elt.appendChild(divRow).appendChild(newDiv).appendChild(priceTeddy).innerHTML = "Prix : " + response[i]["price"] / 100 + "€";
            elt.appendChild(divRow).appendChild(newDiv).appendChild(descriptionTeddy).innerHTML = "Description : " + response[i]["description"];
        }
        
    })
 
    .catch(function (error) {

     });


