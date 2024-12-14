import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import '../styling/Object.css'

const Object = ({ object, isActive, onClick }) => {
    const [playSerah] = useSound(object.serahAudio, {volume: 0.5})
    const [playMom] = useSound(object.momAudio, {volume: 0.5})
    const [transcript, setTranscript] = useState(null)

    useEffect(() => {
        if (isActive) {
            const rand = Math.random()
            if (rand < 0.5) {
                playSerah()
                setTranscript(object.serahT)
            } else {
                playMom()
                setTranscript(object.momT)
            }
        }
    }, [isActive])
    
    return (
        <div 
            className='object-card'
            onClick={onClick}
        >
            <img className='object-image' src={object.image}/>
            {isActive && (
                <div className='text-card'>
                    <p className='text-header'>Transcript/translation:</p>
                    <p>{transcript}</p>
                    <br />
                    <p className='text-header'>Links</p>
                    <a href={object.link1} target="_blank">{object.link1}</a>
                    <br />
                    <a href={object.link2} target='_blank'>{object.link2}</a>
                    </div>
            )}
        </div>
    )
}

export default Object