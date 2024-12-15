# Pinterest 90s

Pinterest 90s is a web application that allows you to search for images and gifs of your favorite categories with a retro 90s style.

## Features

- Search for images and gifs using the Pexels and Giphy APIs.
- Display results in image and gif cards.
- Infinite scroll functionality to load more results.
- Button to return to the top of the page.
- User interface with animations and retro style.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AlfonsoVidrio/pinterest-90s.git
    ```
2. Navigate to the project directory:
    ```sh
    cd pinterest-90s
    ```
3. Create a `config.js` file in the `scripts` folder and add your API credentials. You can generate your API keys on the following websites:
    - [Pexels API](https://www.pexels.com/api/): Sign up and generate your API key.
    - [Giphy API](https://developers.giphy.com/): Sign up and generate your API key.

    ```javascript
    const CONFIG = {
        PEXELS_API_KEY: 'your_pexels_api_key',
        GIPHY_API_KEY: 'your_giphy_api_key'
    };
    ```
Note: For security reasons, it is recommended to use a backend server to store API keys. Storing them directly in the frontend is not secure.

## Usage
1. Open the project in a live server environment. For example, you can use the Live Server extension for Visual Studio Code, or any similar tool.
2. Once the server is running, open the index.html file in your browser.
3. Use the search bar to find images and gifs.
4. Click on the category links to filter the results.
5. Scroll down to load more results automatically.
## Project Structure

- `index.html`: Main application file.
- `scripts/`: Contains the JavaScript files.
  - `api.js`: Handles requests to the Pexels and Giphy APIs.
  - `config.js`: Contains the API keys.
  - `dom.js`: Handles DOM manipulation.
  - `main.js`: Contains the main application logic.
  - `utils.js`: Utility functions.
- `styles/`: Contains the CSS files.
  - `style.css`: Application styles.

## Technologies Used

- HTML
- CSS
- JavaScript

## Author

- [Alfonso Manuel Vidrio Lizaola](https://github.com/AlfonsoVidrio)
