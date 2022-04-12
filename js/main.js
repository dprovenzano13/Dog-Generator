const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('select')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message
        const breedsArray = Object.keys(breedsObject)
    })
