import React, { useState } from 'react';
import '../styles/ImageGallery.css';
import ImageCard from './ImageCard';

function ImageGallery({ images }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelect = (image) => {
    // Implement logic to select/deselect images
  };

  const handleDelete = () => {
    // Implement logic to delete selected images
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          isSelected={selectedImages.includes(image.id)}
          onSelect={() => handleSelect(image)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
