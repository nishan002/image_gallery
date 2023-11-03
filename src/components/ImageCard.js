import React, {useState} from 'react';
import '../styles/ImageCard.css';

function ImageCard({image, onSelect}) {
    const [isSelected, setIsSelected] = useState(false);

    const handleCheckboxChange = () => {
        setIsSelected(!isSelected)
        onSelect(image, !isSelected);
    };

  return (
    <div className={`image-card${isSelected ? ' selected' : ''}`}>
        <input
        type="checkbox"
        style={{ display: isSelected ? 'block' : 'none' }}
        className="checkbox"
        onChange={handleCheckboxChange}
        />
        <img className='image' src={image.url} alt={image.title} />
    </div>
  );
}

export default ImageCard;