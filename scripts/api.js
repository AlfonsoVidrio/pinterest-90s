// API keys and base URLs for requests to Pexels and Giphy APIs
const API_KEY = CONFIG.PEXELS_API_KEY;
const URL1 = 'https://api.pexels.com/v1/search?query=nature&per_page=12&page=';
const URL2 = 'https://api.pexels.com/v1/search?query=';

const GIPHY_API_KEY = CONFIG.GIPHY_API_KEY;
const GIPHY_URL = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=';

// Function to get photos from the Pexels API
const getApi = async (URL) => {
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': API_KEY
        }
    });
    const data = await response.json();
    return data.photos;
}

// Function to get gifs from the Giphy API
const getGifs = async (category, offset = 0) => {
    const url = `${GIPHY_URL}${category}&limit=5&offset=${offset}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    
    // Map the obtained data to extract relevant information from each gif
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width_small.url
    }));

    return gifs;
}