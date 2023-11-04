import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
	const [images, setImages] = useState([]);
	const [selectedImages, setSelectedImages] = useState([]);
	
	// Fetching data from json file
	useEffect(() => {
	fetch('/data/images.json')
		.then((response) => response.json())
		.then((data) => setImages(data))
		.catch((error) => console.error('Error loading image data:', error));
	}, []);

	// Select images
	const handleImageSelect = (image) => {
		if (selectedImages.includes(image)) {
		  setSelectedImages(selectedImages.filter((selectedImage) => selectedImage !== image));
		} else {
		  setSelectedImages([...selectedImages, image]);
		}
	};

	// Selected images delete operation
	const handleDeleteSelectedImages = () => {
		const updatedImages = images.filter((image) => !selectedImages.includes(image));
		setImages(updatedImages);
		setSelectedImages([]);
	};

    return (
      <div className="App">
		<DndProvider backend={HTML5Backend}>
			<div className='container'>
				<Header count={selectedImages.length} images={images} onDelete={handleDeleteSelectedImages}/>
				<ImageGallery onImageSelect={handleImageSelect} images={images} setImages={setImages}/>
			</div>
		</DndProvider>
      </div>
    );
}

export default App;
