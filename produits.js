// promessse "resolve" pour récupérer les éléments dans le fichiers Json et les implémenter dans le code source.
function promiseGet() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/api/teddies/' + idTeddy);

        request.send();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    let response = JSON.parse(this.responseText);

                }
                // fin de la liste
                else {
                    reject(XMLHttpRequest);
                }
            }
        }
    })
};