// Get the element where the image results will be displayed
const imageResults = document.getElementById('image-results');

// Function to create and display an image card
const createImageCard = (photo) => {
    // Check if the photo has already been added to avoid duplicates
    if (!addedCards.includes(photo.id)) {
        // Add the photo ID to the list of added cards
        addedCards.push(photo.id);

        // Create an img element for the photo
        const imgCard = document.createElement('img');
        // Set the source of the image to the small version of the photo
        imgCard.setAttribute('src', photo.src.small);
        // Set the alt text of the image to the photographer's name
        imgCard.setAttribute('alt', photo.photographer);
        // Add the 'image-card' class to the img element
        imgCard.classList.add('image-card');

        // Append the img element to the imageResults container
        imageResults.appendChild(imgCard);
    }
}

// Function to create and display a gif card
const createGifCard = (gif) => {
    // Check if the gif has already been added to avoid duplicates
    if (!addedCards.includes(gif.id)) {
        // Add the gif ID to the list of added cards
        addedCards.push(gif.id);

        // Create an img element for the gif
        const gifCard = document.createElement('img');
        // Set the source of the image to the gif URL
        gifCard.setAttribute('src', gif.url);
        // Set the alt text of the image to the gif title
        gifCard.setAttribute('alt', gif.title);
        // Add the 'gif-card' class to the img element
        gifCard.classList.add('gif-card');

        // Append the img element to the imageResults container
        imageResults.appendChild(gifCard);
    }
}