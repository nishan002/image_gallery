import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from './components/ImageGallery';


function App() {
	const [images, setImages] = useState([]);

	useEffect(() => {
	// Load image data from the JSON file
	fetch('/data/images.json') // Adjust the path as needed
		.then((response) => response.json())
		.then((data) => setImages(data))
		.catch((error) => console.error('Error loading image data:', error));
	}, []);

    return (
      <div className="App">
        <ImageGallery images={images} />
      </div>
    );
}

export default App;
