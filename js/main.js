const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message // Turn the message into an object
        const breedsArray = Object.keys(breedsObject) // Turn object into an array
        for(let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option') // Creating an <option> tag
            option.value = breedsArray[i] // Creates the value of option to be a specific breed
            option.innerText = breedsArray[i]
            select.appendChild(option)
        }
    })
