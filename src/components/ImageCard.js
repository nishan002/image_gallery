import React, {useState} from 'react';
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import '../styles/ImageCard.css';

function ImageCard({index, id, image, onSelect, moveImage}) {
    const [isSelected, setIsSelected] = useState(false);
	
	// Image drag and drop handling 
	const ref = useRef(null);

	const [{ handlerId ,isOver}, drop] = useDrop({
		accept: "item",
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
				isOver: !!monitor.isOver(),
			};
		},
		hover(item, monitor) {
		if (!ref.current) {
			return;
		}
		const dragIndex = item.index;
		const hoverIndex = index;

		if (dragIndex === hoverIndex) {
			return;
		}

		const hoverBoundingRect = ref.current?.getBoundingClientRect();

		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

		const clientOffset = monitor.getClientOffset();

		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		moveImage(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});
	
	const [{ isDragging }, drag] = useDrag({
		type: "item",
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const cardStyles ={
		border : isOver ? '1px solid gray' : 'none',
		transform : isOver ? 'translateY(10px)' : 'translateY(0)',
	}

	const dropAreaStyles = {
		opacity: isOver ? 0 : 1, 
	};

	drag(drop(ref));

	// Checkbox status check whether it is selected or not
    const handleCheckboxChange = () => {
        setIsSelected(!isSelected)
        onSelect(image, !isSelected);
    };

  return (
    <div ref={ref} style={{cardStyles, opacity: isSelected ? ".6" : "1", transition: ".2s"}} data-handler-id={handlerId} className={`image-card`}>
		<div className={ isSelected ? "" : "overlay" }></div>
        <input
        type="checkbox"
        style={{ display: isSelected ? 'block' : 'none' }}
        className="checkbox"
        onChange={handleCheckboxChange}
		moveImage={moveImage}
        />
        <img className='image' src={image.url} alt={image.title} style={{dropAreaStyles, transition: ".2s"}}/>
    </div>
  );
}

export default ImageCard;