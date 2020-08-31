function myRequest(sectionId, url){
  const section = document.getElementById(sectionId)
  const request = new XMLHttpRequest();
   request.onreadystatechange = function(){
     if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
         const response = JSON.parse(this.responseText);
       console.log(response);
       
       for( const produit of response){
         const productTitle = document.createElement('h3')
         productTitle.textContent = produit.name;
         section.appendChild(productTitle)
         const productImg = document.createElement('img')
         productImg.setAttribute('src', produit.imageUrl);
         section.appendChild(productImg)
         const productPrice = document.createElement('h4')
        productPrice.textContent = ("Prix : " + produit.price) ;
        section.appendChild(productPrice)
        const productId = document.createElement('a')
        productId.setAttribute('href', 'produits.html?id=' + produit._id)
        productId.textContent = 'En savoir plus';
        section.appendChild(productId)
        console.log(produit._id)
       }
   }
 };
         request.open('GET', url );
         request.send(); 
      }
 
 myRequest('teddies', 'http://localhost:3000/api/teddies/');


 