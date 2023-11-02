import React from 'react';
import '../styles/ImageGallery.css';

function ImageCard({ image, isSelected, onSelect, onDelete }) {
  return (
    <div className={`image-card ${isSelected ? 'selected' : ''}`}>
      <img className='image' src={image.url} alt={image.title} />
      </div>
  );
}

export default ImageCard;