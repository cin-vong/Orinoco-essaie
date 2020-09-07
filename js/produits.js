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
    productPrice.textContent = ("Prix : " + product.price + '€') ;
    section.appendChild(productPrice)
     console.log(product.name);

     if(optionName !== null){
       product[optionName].forEach(option =>{
         console.log(option)
       });
     }
   }

 //Select colors//
 function customColorsTeddy (parentElt, productColors){
  const formColor = document.createElement("form");
  const selectColor = document.createElement("select");
 
  formColor.setAttribute('color-list');
  form.textContent = 'Choix de couleurs :'
  selectColor.id = "color-list";
 
  parentElt.appendChild(form);
  parentElt.appendChild(select);
 
 productColors.forEach(productColors => {
   const option =document.createElement('option');
   option.textContent = productColors
   select.appendChild(option);
 })

  selectElement.addEventListener('change', (event) => {
    const colorChosen = selectElement.options[event.target.value].value;

    console.log(colorChosen);
  })
 }

 async function getProduct(urlToFetch){
 let reponse = await fetch(urlToFetch);
 let product = await reponse.json();
 console.log(product)
 displayProduct(product, 'colors');
}

getProduct(urlToFetch, 'colors');
