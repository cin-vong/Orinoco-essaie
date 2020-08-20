function seeTeddies() {
    const imgElt = document.querySelector('img');
    const txt = document.querySelector('#idTeddy');
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);
        const imageUrl = response.current_condition.icon;
        imgElt.setAttribute('src', imageUrl, _id, name, price, description, );
        txt.textContent = response.current_condition.condition;
      }
  };
  request.open('GET', 'http://localhost:3000/api/teddies/' + idTeddy);
  request.send(); 
    
     }
  
  const btn = document.querySelector('button'); 
  const txt = document.querySelector('div');
    
    btn.addEventListener ('click', event => {
      event.preventDefault();
      seeTeddies();
    });