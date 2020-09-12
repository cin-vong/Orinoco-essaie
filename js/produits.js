const url = new URL(document.URL)
const teddyId = url.searchParams.get('id')
console.log(teddyId)

const urlToFetch = 'http://localhost:3000/api/teddies/' + teddyId
console.log(urlToFetch);

 //affichage produit//

 function displayProduct( product, optionName){
  const section = document.getElementById('teddies')
   console.log(product);   
    const productTitle = document.createElement('h3')
    productTitle.textContent = product.name;
    section.appendChild(productTitle)
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.imageUrl);
    section.appendChild(productImg)
    const productDescrpt = document.createElement('p')
    productDescrpt.textContent = product.description;
    section.appendChild(productDescrpt)
    const productPrice = document.createElement('h4')
    productPrice.textContent = ("Prix : " + product.price/ 100 + "€"); 
    section.appendChild(productPrice)
     console.log(product.name);

     if(optionName !== null){
       product[optionName].forEach(option =>{
         console.log(option)
       });
     }
   }

 //Select colors//
 function customColorsTeddy (productColors){
  const section = document.getElementById('teddies')
  const formColor = document.createElement('form')
  const labelColor = document.createElement('label')
  labelColor.setAttribute('for', 'selectColor')
  labelColor.textContent = "Choix de couleurs : "
  const selectColor = document.createElement('select')
  selectColor.setAttribute('name', 'color')
  selectColor.id = "selectColor"

  section.appendChild(formColor)
  formColor.appendChild(labelColor)
  formColor.appendChild(selectColor)
 
 productColors.forEach(productColors => {
   const option = document.createElement('option');
   option.textContent = productColors
   selectColor.appendChild(option);
 })

  selectColor.addEventListener('change', (event) => {
    const colorChosen = event.target.value
    console.log(colorChosen)
  })
 }

 async function getProduct(urlToFetch){
 let reponse = await fetch(urlToFetch);
 let product = await reponse.json();
 console.log(product)
 displayProduct(product, 'colors');
 customColorsTeddy(product.colors)
}

getProduct(urlToFetch, 'colors');


 //Select quantity//
function quantity(productNumber){
  const section = document.getElementById('teddies')
  const formNumber = document.createElement('form')
  const labelNumber = document.createElement('label')
  labelNumber.setAttribute('for', 'selectNumber')
  labelNumber.textContent = "Quantité : "
  const selectNumber = document.createElement('select')
  selectNumber.setAttribute('name', 'number')
  selectNumber.id = "selectNumber"

  section.appendChild(formNumber)
  formNumber.appendChild(labelNumber)
  formNumber.appendChild(selectNumber)
 
  productNumber.forEach(productNumber => {
   const option = document.createElement('option');
   option.textContent = productNumber
   productNumber.appendChild(option);

   for (let i = 1; i < 5; i++){
    const optionNumber= document.getElementById('option').innerHTML;
    optionNumber.text = i
    xNumber.add(optionNumber);
    sessionStorage.setItem("number", "1")
    number.addEventListener("click", function (event) {
        sessionStorage.removeItem("number")
        let amountStorage = xNumber.value
        event.preventDefault();
        sessionStorage.setItem("amount", amountStorage);
    });
   }
 })
}

  //Send cart//

function addToCart (product){
  addToCart (product);
  const btn = document.createElement('button')
  btn.innerHTML = `<div class= cart-btn>Ajouter au panier</div>`
  div.classList.add('button');
  btn.appendChild(form);
  btn.appendChild(btn);

  btn.addEventListener('click',() => {
    localStorage.setItem(product.name, JSON.stringify(product));
    btn.classList.add('Panier')
    div.textContent = 'Le produit a été ajouté au panier !'

    const product = [product._id, product.name, product.price, product.imageUrl];
  })
}



