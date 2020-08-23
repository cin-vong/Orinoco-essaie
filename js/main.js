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
         section.appendChild(productTitle)
       }

       for( const produit of response){
        console.log(produit._id)
        const productId = document.createElement('h5')
        productId.textContent = produit._id;
        section.appendChild(productId)
      }

       for( const produit of response){
        console.log(produit.price)
        const productPrice = document.createElement('h4')
        productPrice.textContent = produit.price;
        section.appendChild(productPrice)
      }

      for( const produit of response){
        console.log(produit.imageUrl)
        const productImg = document.createElement('src')
        productImg.textContent = produit.imageUrl;
        section.appendChild(productImg)
      }

      for( const produit of response){
        console.log(produit.description)
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
 myRequest('cameras', 'http://localhost:3000/api/cameras/');
 myRequest('furnitures','http://localhost:3000/api/furniture/');

PromiseGet(url)
.then(function (reponse){
  const items = reponse
  return items
})
.then(function createList (items){
  const ul = document.getElementById('items')
  for (let i = 0; i < items.length; i++){
    const items = items[i]
    const li = ul.appendChild(document.createDocumentFragment('li'))
    const h3 = li.appendChild(document.createDocumentFragment('h3'))
    const divImg = li.appendChild(document.createDocumentFragment('div'))
    const img = divImg.appendChild(document.createDocumentFragment('img'))
    const a = li.appendChild(document.createDocumentFragment('a'))
    li.classList.add('item')
    h3.classList.add('item_title')
    divImg.classList.add('item_img')
    a.classList.add('item_btn')
    h3.innerText = item.name
    a.innerText = 'Voir ce modèle'
    img.setAttribute('src', item.iamgeUrl)
    img.setAttribute('alt', 'une photo du modèle' + item.name)
    a.setAttribute('href', 'produit.html# + item._id')
  }
})


