const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('select')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message // Turn the message into an object
        const breedsArray = Object.keys(breedsObject) // Turn object into an array
        console.log(breedsArray)
    })
