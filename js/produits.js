const url = new URL(document.URL)
const paramId = url.searchParams.get('id')
console.log(paramId)

const urlToFetch = 'http://localhost:3000/api/teddies/' + paramId
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
 