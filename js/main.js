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
         const productImg = document.createElement('img')
         productImg.setAttribute('src', produit.imageUrl);
         section.appendChild(productImg)
         const productPrice = document.createElement('h4')
        productPrice.textContent = ("Prix : " + produit.price) ;
        section.appendChild(productPrice)
        const a = section.appendChild(document.createElement('a'))
        a.setAttribute('href', 'produit.html#' + teddies._id)
        const productBtn = document.createElement("BUTTON");
        productBtn.textContent = ("En savoir plus");
        section.appendChild(productBtn)
       }
   }
 };
         request.open('GET', url );
         request.send(); 
      }
 
 myRequest('teddies', 'http://localhost:3000/api/teddies/');
 myRequest('cameras', 'http://localhost:3000/api/cameras/');
 myRequest('furnitures','http://localhost:3000/api/furniture/');

 