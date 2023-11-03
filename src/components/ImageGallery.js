import React, { useState } from 'react';
import '../styles/ImageGallery.css';
import ImageCard from './ImageCard';

function ImageGallery({ images, onImageSelect }) {
    
    return (
        <div className="image-gallery">
        {images.map((image) => (
            <ImageCard
            key={image.id}
            image={image}
            onSelect={onImageSelect}
            />
        ))}
        </div>
    );
}

export default ImageGallery;
