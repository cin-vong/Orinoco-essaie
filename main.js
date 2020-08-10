//urlsearchparams

const url = new URL('http://localhost:3000/api/teddies');
const params = new URLSearchParams(url.search);
params.set('baz', 3);

params.has('baz') === true
params.toString() === 'foo=1&bar=2&baz=3'
