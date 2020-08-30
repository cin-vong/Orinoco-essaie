function myRequest(sectionId, url){
  const section = document.getElementById(sectionId)
  const request = new XMLHttpRequest();
   request.onreadystatechange = function(){
     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
         const response = JSON.parse(this.responseText);
       console.log(response);
       
       for( const produit of response){
         console.log(produit.name)
         const productTitle = document.createElement('h3')
         productTitle.textContent = produit.name;
         const productImg = document.createElement('img')
         productImg.setAttribute('src', produit.imageUrl);
         section.appendChild(productImg)
         section.appendChild(productTitle)
         const productId = document.createElement('h5')
         productId.textContent = produit._id;
         section.appendChild(productId)
         const productPrice = document.createElement('h4')
         productPrice.textContent = ("Prix : " + produit.price) ;
        section.appendChild(productPrice)
        const productText = document.createElement('p')
        productText.textContent = produit.description;
        section.appendChild(productText)
       }   
   }
 };
         request.open('GET', url );
         request.send(); 
      }
 
 myRequest('teddies', 'http://localhost:3000/api/teddies/');

//fetch//

const getTeddy = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

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
 