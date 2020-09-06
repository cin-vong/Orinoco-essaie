function addToCart (section, data){
    addToCart('panier');
}

const btn = document.createElement('div');
const div = document.createElement('div');
btn.innerHTML=`<div class="site-btn btn-line>Ajouter au panier</div>`
div.classList.add('add-to-cart');
parentElt.appendChild(div);
parentElt.appendChild(btn);

btn.addEventListener('click', () => {
    localStorage.setItem(product.name, JSON.stringify(produit));
    btn.classList.add('invisible')
    div.textContent = 'Le produit a été ajouté !'

})

const product = [produit._id, produit.name, produit.price, produit.imageUrl];