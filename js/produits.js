const url = new URL(document.URL)
const teddyId = url.searchParams.get('id')
console.log(teddyId)

const urlToFetch = 'http://localhost:3000/api/teddies/' + teddyId
console.log(urlToFetch);

fetch(urlToFetch)
  .then(function(response){
    return response.json();
  })
  .then (function (produit){
    console.log(produit.name);
  })

//fetch//
 function customColorsTeddy (parentElt, productColors){
  let labelColor = document.createElement("label");
  let selectColor = document.createElement("select");
 
  labelColor.setAttribute('color-list');
  label.textContent = 'Choix de couleurs :'
  selectColor.id = "color-list";
 
  parentElt.appendChild(label);
  parentElt.appendChild(select);
 
 productColors.forEach(productColors => {
   const option =document.createElement('option');
   option.textContent = productColors
   select.appendChild(option);
 })

  Selection.addEventListener('change', (event) => {
    const colorChosen = event.target.value;
    console.log(colorChosen);
  })
 }

 //affichage produit//

 function displayProduct( product, optionName){
   for( const produit of produit ){
    const productTitle = document.createElement('h3')
    productTitle.textContent = produit.name;
    section.appendChild(productTitle)
    const productImg = document.createElement('img')
    productImg.setAttribute('src', produit.imageUrl);
    section.appendChild(productImg)
    const productDescrpt = document.createElement('p')
    productDescrpt.textContent = produit.description;
    section.appendChild(productDescrpt)
    const productPrice = document.createElement('h4')
    productPrice.textContent = ("Prix : " + produit.price) ;
    section.appendChild(productPrice)
     console.log(product.name);

     if(optionName !== null){
       product[optionName].forEach(option =>{
         console.log(option)
       });
     }
   }
 }

 async function getProducts(url, option){
   let reponse = await fetch(url);
  let product = await reponse.json();
  console.log(product)
  displayProduct(products, option);
 }
 
 getProducts('http://localhost:3000/api/teddies/', 'teddies');