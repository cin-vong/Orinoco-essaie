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
   }
 };
         request.open('GET', url );
         request.send(); 
      }
 
 myRequest('teddies', 'http://localhost:3000/api/teddies/');
 myRequest('cameras', 'http://localhost:3000/api/cameras/');