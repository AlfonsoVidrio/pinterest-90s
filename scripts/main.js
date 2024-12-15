document.addEventListener('DOMContentLoaded', () => {
    loadInitialImages();
    setupEventListeners();
    setupImageToggle();
});

let currentPage = 1;
const addedCards = [];

// Function to generate and display images and gifs
const generateAllImages = async (page) => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const url = `${URL1}${randomPage}`;
    const photos = await getApi(url);
    const gifs = await getGifs('nature', (page - 1) * 5);

    const combinedResults = shuffleArray([...photos, ...gifs]);

    if (combinedResults.length === 0) {
        imageResults.innerHTML = "<p>No results found.</p>";
    } else {
        combinedResults.forEach(item => {
            if (item.src) {
                createImageCard(item);
            } else {
                createGifCard(item);
            }
        });
    }
}

// Function to get and display images and gifs based on a search query
const getImageByName = async (query) => {
    if (query === "") {
        return;
    }

    imageResults.innerHTML = "";
    addedCards.length = 0;

    const photos = await getApi(URL2 + query);
    const gifs = await getGifs(query);

    const combinedResults = shuffleArray([...photos, ...gifs]);

    if (combinedResults.length === 0) {
        imageResults.innerHTML = "<p>No results found.</p>";
    } else {
        combinedResults.forEach(item => {
            if (item.src) {
                createImageCard(item);
            } else {
                createGifCard(item);
            }
        });
    }
}

// Function to handle infinite scrolling
const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        currentPage++;
        generateAllImages(currentPage);
    }
}

// Function to load initial images on page load
const loadInitialImages = async () => {
    await generateAllImages(1);
}

// Function to set up event listeners
const setupEventListeners = () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const categoryLinks = document.querySelectorAll('.category-link');

    searchButton.addEventListener('click', () => getImageByName(searchInput.value.trim()));

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.textContent.trim();
            getImageByName(category);
        });
    });

    window.addEventListener('scroll', debounce(handleScroll, 200));

    window.onscroll = function() {
        if(document.documentElement.scrollTop > 100){
            document.querySelector('.go-top-container').classList.add('show'); 
        }
        else{
            document.querySelector('.go-top-container').classList.remove('show');
        }
    }

    document.querySelector('.go-top-container').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Function to set up image toggle
const setupImageToggle = () => {
    const mediaAd = document.getElementById('media-ad');
    const visitorCounter = document.getElementById('visitor-counter');
    let isMediaAdVisible = true;

    // Function to toggle visibility
    const toggleVisibility = () => {
        if (isMediaAdVisible) {
            mediaAd.classList.remove('show');
            visitorCounter.classList.add('show');
        } else {
            mediaAd.classList.add('show');
            visitorCounter.classList.remove('show');
        }
        isMediaAdVisible = !isMediaAdVisible;
    };

    // Initially show the media ad
    mediaAd.classList.add('show');

    // Set interval to toggle visibility every X milliseconds
    setInterval(toggleVisibility, 10000);
}