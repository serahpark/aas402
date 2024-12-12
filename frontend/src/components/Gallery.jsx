import { useState } from 'react'
import Object from './Object'
import AddObject from './AddObject'
import '../styling/Gallery.css'

const Gallery = ({ objects }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    

    const handleImageClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index))
    }

    return (
        <div className="gallery-container">
            {objects.map(obj => (
                <Object
                    key={obj.id}
                    object={obj} 
                    isActive={obj.id === activeIndex}
                    onClick={() => handleImageClick(obj.id)}
                />
            ))}
            <AddObject />
        </div>
    )
}

export default Gallery