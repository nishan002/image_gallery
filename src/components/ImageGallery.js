import React, { useCallback } from 'react';
import '../styles/ImageGallery.css';
import ImageCard from './ImageCard';
import addImage from '../images/add_images.png'

function ImageGallery({ images, onImageSelect, setImages }) {

    const moveImage = useCallback((dragIndex, hoverIndex) => {
        setImages((prevImages) => {
            // Create a copy of the images array
            const updatedImages = [...prevImages];
        
            // Remove the dragged image from its original position
            const [draggedImage] = updatedImages.splice(dragIndex, 1);
        
            // Insert the dragged image at the new position
            updatedImages.splice(hoverIndex, 0, draggedImage);
        
            return updatedImages;
        });
      }, [setImages]);
    

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <ImageCard
                key={image.id}
                index={index}
                id={image.id}
                image={image}
                onSelect={onImageSelect}
                moveImage={moveImage}
                />
            ))}
            <div className='add-image'>
                <img src={addImage} alt="" />
                <p>Add Images</p>
            </div>
        </div>
    );
}

export default ImageGallery;
