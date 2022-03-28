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
            option.innerText = breedsArray[i] // Adds the breed text to the option
            select.appendChild(option) // Adds current option tag to the select tag
        }
    })

    select.addEventListener('change', event => {
    
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
    })

    const img = document.querySelector('.dogImg')

    const getDoggoImg = url => {
        fetch(url) // Going to the API url above in the variable 'url'
            .then(res => {
                return res.json(); // Get a JSON message back
            })
            .then(data => {
                img.src = data.message // Extract message from JSON and attach to img tag as new source
            })
    }