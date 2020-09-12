const getCard = async (index) => {
    return await JSON.parse(localStorage.getItem(localStorage.key(index)))
}

const displayCart = async () => {
    if(localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++){
            const product = await getCard(i)
            const teddyId = product[0];
            const teddyName = product[1];
            const teddyPrice = product[2];
            const teddyImg = product[3];
            cardInfos.product.push(TeddyId);

            renderCard(teddyId, teddyName, teddyPrice, teddyImg)
        }
    }
}

const renderCard = (productName, productPrice, imgUrl)
const article = document.createElement('article');
article.innerHTML = `<div class="product-infos">'
'<p class="product-title>${productName}</p>'
'<img src="${imgUrl}">'
'<p class="price">${productPrice} €</p>'
'<div class="remove"><button class="btn-remove"</div>'
card.insertBefore(article, cardTotal)`;


