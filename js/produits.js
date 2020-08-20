let newTeddy = document.getElementById("teddyProduct")
newTeddy.classList.add("card-body");
let teddyH2 = document.createElement("h2");
let labelColor = document.createElement("label");
let choiceColor = document.createElement("select");
teddyH3.classList.add("card-title");
let addTeddy = document.createElement("input");
let myImg = new Image();
myImg.addEventListener('load', function () { })
addTeddy.classList.add("btn");
let addCart = document.createElement("a");

function seeTeddies() {
    const imgElt = document.querySelector('img');
    const txt = document.querySelector('#idTeddy');
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);
        const imageUrl = response.current_condition.icon;
        imgElt.setAttribute('src', imageUrl, _id, name, price, description, );
        txt.textContent = response.current_condition.condition;
        }
     };
        request.open('GET', 'http://localhost:3000/api/teddies/' + idTeddy);
        request.send(); 
     }

  const btn = document.querySelector('button'); 
  const txt = document.querySelector('div');
    
    btn.addEventListener ('click', event => {
      event.preventDefault();
      seeTeddies();
    });

    seeTeddies()
    .then(function (response) {
        myImg.src = response["imageUrl"];
        newTeddy.appendChild(divImg).appendChild(myImg);
        newTeddy.appendChild(teddyH3).innerHTML = response["name"];
        newTeddy.appendChild(teddyPrice).innerHTML = "Prix : " + response["price"] / 100 + " euros";
        newTeddy.appendChild(teddyDescription).innerHTML = "Description :" + response["description"];
        labelColor.innerHTML = "couleur du modèle : ";

    });

    seeTeddies()
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
                       
                        let colorStorage = x.value;                  
                        event.preventDefault();
                        sessionStorage.setItem("color", colorStorage);
                    }
                })
            }
        }
    })