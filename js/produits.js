function myRequest(){
    const section = document.getElementById("teddies");
    const request = new XMLHttpRequest();
     request.onreadystatechange = function(){
       if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
           const response = JSON.parse(this.responseText);
         console.log(response);
         
         for( const teddy of response){
           console.log(teddy.name)
           const productTitle = document.createElement('h3')
           productTitle.textContent = teddy.name;
           section.appendChild(productTitle)
         }
  
         for( const teddy of response){
          console.log(teddy.imageUrl)
          const productTitle = document.createElement("#teddies img > a")
          productTitle.textContent = teddy.imageUrl;
          section.appendChild(productTitle)
        }

        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector('select[name="colors]').onchange=changeEventHandler;
        },false);

        function changeEventHandler(colors){
            if(!colors.target.value) alert('Choisir la couleur');
            else alert('Choix :' + colors.target.value);

            event.preventDefault();
        }
     }
   };
           request.open('GET', 'http://localhost:3000/api/teddies/');
           request.send(); 
        }
   
   myRequest('teddies');

    