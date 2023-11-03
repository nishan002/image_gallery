import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';


function App() {
	const [images, setImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	
	useEffect(() => {
	fetch('/data/images.json')
		.then((response) => response.json())
		.then((data) => setImages(data))
		.catch((error) => console.error('Error loading image data:', error));
	}, []);

	const handleImageSelect = (image) => {
		if (selectedImages.includes(image)) {
		  setSelectedImages(selectedImages.filter((selectedImage) => selectedImage !== image));
		} else {
		  setSelectedImages([...selectedImages, image]);
		}
	};

	const handleDeleteSelectedImages = () => {
		const updatedImages = images.filter((image) => !selectedImages.includes(image));
		setImages(updatedImages);
		setSelectedImages([]);
	};

    return (
      <div className="App">
		<div className='container'>
			<Header count={selectedImages.length} images={images} onDelete={handleDeleteSelectedImages}/>
			<ImageGallery onImageSelect={handleImageSelect} images={images} />
		</div>
      </div>
    );
}

export default App;
